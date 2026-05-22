/**
 * Centralized API Client for Valcot Admin
 * Reuses same token strategy as company frontend
 */

const rawApiBase = import.meta.env.VITE_API_URL || 'http://localhost:4000'
export const API_BASE = rawApiBase.replace(/\/$/, '')

const CSRF_COOKIE_NAME = 'XSRF-TOKEN'

// ============= In-Memory Token Storage =============
let accessToken = null
let tokenExpiresAt = null

export const getToken = () => accessToken
export const getTokenExpiry = () => tokenExpiresAt

export const setToken = (token, expiresAt) => {
  accessToken = token
  tokenExpiresAt = expiresAt
}

export const clearToken = () => {
  accessToken = null
  tokenExpiresAt = null
}

// ============= CSRF Token Handling =============
let csrfTokenInMemory = null

export const getCsrfToken = () => {
  const cookies = document.cookie.split(';')
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=')
    if (name === CSRF_COOKIE_NAME) {
      const token = decodeURIComponent(value)
      csrfTokenInMemory = token
      return token
    }
  }
  return csrfTokenInMemory
}

export const setCsrfToken = (token) => {
  csrfTokenInMemory = token
}

export async function fetchCsrfToken() {
  try {
    const response = await fetch(`${API_BASE}/api/auth/csrf-token`, {
      method: 'GET',
      credentials: 'include',
    })
    if (response.ok) {
      const data = await response.json()
      if (data.csrfToken) csrfTokenInMemory = data.csrfToken
      await new Promise(resolve => setTimeout(resolve, 50))
      return !!getCsrfToken()
    }
    return false
  } catch (error) {
    console.warn('Failed to fetch CSRF token:', error)
    return false
  }
}

// ============= Token Expiry Checks =============
export const isTokenExpiringSoon = () => {
  if (!tokenExpiresAt) return true
  const expiryTime = new Date(tokenExpiresAt).getTime()
  return (expiryTime - Date.now()) < 5 * 60 * 1000
}

export const isTokenExpired = () => {
  if (!tokenExpiresAt) return true
  return new Date(tokenExpiresAt).getTime() < Date.now()
}

// ============= Token Refresh =============
let isRefreshing = false
let refreshPromise = null
let refreshSubscribers = []

const subscribeToRefresh = (callback) => {
  refreshSubscribers.push(callback)
}

const notifyRefreshSubscribers = (token) => {
  refreshSubscribers.forEach(callback => callback(token))
  refreshSubscribers = []
}

export async function refreshTokenSilently() {
  if (isRefreshing && refreshPromise) return refreshPromise

  isRefreshing = true
  refreshPromise = (async () => {
    try {
      const response = await fetch(`${API_BASE}/api/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.message || 'Failed to refresh token')
      }

      const data = await response.json()
      setToken(data.token, data.expiresAt)
      if (data.csrfToken) csrfTokenInMemory = data.csrfToken
      notifyRefreshSubscribers(data.token)
      window.dispatchEvent(new CustomEvent('tokenRefreshed', { detail: data }))
      return data
    } catch (error) {
      clearToken()
      window.dispatchEvent(new CustomEvent('authSessionExpired'))
      throw error
    } finally {
      isRefreshing = false
      refreshPromise = null
    }
  })()

  return refreshPromise
}

// ============= API Request Helpers =============
export function getAuthHeaders() {
  const token = getToken()
  const csrfToken = getCsrfToken()
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(csrfToken && { 'X-CSRF-Token': csrfToken }),
  }
}

export async function handleResponse(response) {
  if (response.headers.get('X-Token-Expiring-Soon') === 'true') {
    refreshTokenSilently().catch(console.error)
  }
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message = data?.message || 'Unexpected error'
    const error = new Error(message)
    error.status = response.status
    error.code = data?.code
    error.data = data
    throw error
  }
  return data
}

export async function apiRequest(endpoint, options = {}) {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`

  const token = getToken()
  if (token && isTokenExpiringSoon() && !isTokenExpired()) {
    try { await refreshTokenSilently() } catch (e) { console.warn('Background refresh failed:', e) }
  }

  const method = options.method?.toUpperCase() || 'GET'
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
    if (!getCsrfToken()) await fetchCsrfToken()
  }

  const response = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: { ...getAuthHeaders(), ...options.headers },
  })

  if (response.status === 401) {
    const data = await response.clone().json().catch(() => ({}))
    if (data.code === 'TOKEN_EXPIRED' || data.message?.includes('expired')) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          subscribeToRefresh(async (newToken) => {
            try {
              const retryResponse = await fetch(url, {
                ...options,
                credentials: 'include',
                headers: {
                  ...options.headers,
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${newToken}`,
                  'X-CSRF-Token': getCsrfToken(),
                },
              })
              resolve(handleResponse(retryResponse))
            } catch (err) { reject(err) }
          })
        })
      }
      try {
        const refreshed = await refreshTokenSilently()
        const retryResponse = await fetch(url, {
          ...options,
          credentials: 'include',
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${refreshed.token}`,
            'X-CSRF-Token': getCsrfToken(),
          },
        })
        return handleResponse(retryResponse)
      } catch (refreshError) { throw refreshError }
    }
  }

  if (response.status === 403) {
    const data = await response.clone().json().catch(() => ({}))
    if (data.code?.startsWith('CSRF')) {
      await fetchCsrfToken()
      await new Promise(resolve => setTimeout(resolve, 100))
      const retryResponse = await fetch(url, {
        ...options,
        credentials: 'include',
        headers: { ...getAuthHeaders(), ...options.headers },
      })
      return handleResponse(retryResponse)
    }
  }

  return handleResponse(response)
}

// ============= Convenience Methods =============
export const api = {
  get: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'GET' }),
  post: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) }),
  patch: (endpoint, body, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'PATCH', body: JSON.stringify(body) }),
  delete: (endpoint, options = {}) =>
    apiRequest(endpoint, { ...options, method: 'DELETE' }),
}

export default api
