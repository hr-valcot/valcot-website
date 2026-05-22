import {
  API_BASE, getToken, getTokenExpiry,
  setToken, clearToken,
  isTokenExpiringSoon, isTokenExpired,
  refreshTokenSilently, handleResponse,
  fetchCsrfToken, setCsrfToken,
} from './api'

export {
  getToken, getTokenExpiry, setToken, clearToken,
  isTokenExpiringSoon, isTokenExpired, refreshTokenSilently,
}

export async function login(credentials) {
  await fetchCsrfToken()
  const response = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(credentials),
  })
  const data = await handleResponse(response)
  setToken(data.token, data.expiresAt)
  if (data.csrfToken) setCsrfToken(data.csrfToken)
  return data
}

export async function logout() {
  try {
    await fetch(`${API_BASE}/api/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    })
  } catch (error) {
    console.warn('Logout request failed:', error)
  }
  clearToken()
  setCsrfToken(null)
  window.dispatchEvent(new CustomEvent('authLogout'))
}
