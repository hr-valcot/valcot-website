import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import * as authService from '../services/authService'
import { fetchCsrfToken } from '../services/api'
import { isPlatformRole } from '../config/rolePermissions'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isRestoring, setIsRestoring] = useState(true)
  const [authError, setAuthError] = useState(null)

  const clearSession = useCallback(() => {
    setUser(null)
    setToken(null)
    authService.clearToken()
  }, [])

  useEffect(() => {
    const handleTokenRefreshed = (event) => {
      const { token: newToken, user: newUser } = event.detail
      setToken(newToken)
      if (newUser) setUser(newUser)
    }
    const handleSessionExpired = () => {
      clearSession()
      setAuthError('Session expired. Please login again.')
    }
    const handleLogout = () => clearSession()

    window.addEventListener('tokenRefreshed', handleTokenRefreshed)
    window.addEventListener('authSessionExpired', handleSessionExpired)
    window.addEventListener('authLogout', handleLogout)
    return () => {
      window.removeEventListener('tokenRefreshed', handleTokenRefreshed)
      window.removeEventListener('authSessionExpired', handleSessionExpired)
      window.removeEventListener('authLogout', handleLogout)
    }
  }, [clearSession])

  useEffect(() => {
    let isActive = true
    const restoreSession = async () => {
      try {
        let csrfReady = await fetchCsrfToken()
        if (!csrfReady) {
          await new Promise(resolve => setTimeout(resolve, 200))
          csrfReady = await fetchCsrfToken()
        }
        const refreshed = await authService.refreshTokenSilently()
        if (isActive && refreshed) {
          // Only allow platform roles
          if (!isPlatformRole(refreshed.user?.role)) {
            clearSession()
            setAuthError('ไม่มีสิทธิ์เข้าถึง Platform Admin')
            return
          }
          setToken(refreshed.token)
          setUser(refreshed.user)
        }
      } catch {
        if (isActive) clearSession()
      } finally {
        if (isActive) setIsRestoring(false)
      }
    }
    restoreSession()
    return () => { isActive = false }
  }, [clearSession])

  useEffect(() => {
    if (!token) return
    const checkInterval = setInterval(() => {
      if (authService.isTokenExpiringSoon()) {
        authService.refreshTokenSilently().catch(console.error)
      }
    }, 2 * 60 * 1000)
    return () => clearInterval(checkInterval)
  }, [token])

  const login = useCallback(async (credentials) => {
    setAuthError(null)
    const data = await authService.login(credentials)
    // Verify platform role
    if (!isPlatformRole(data.user?.role)) {
      await authService.logout()
      throw new Error('ไม่มีสิทธิ์เข้าถึง Platform Admin — ต้องเป็น Valcot Role เท่านั้น')
    }
    setToken(data.token)
    setUser(data.user)
    return data.user
  }, [])

  const logout = useCallback(async () => {
    await authService.logout()
    clearSession()
  }, [clearSession])

  const value = useMemo(
    () => ({
      user,
      token,
      authError,
      isRestoring,
      isAuthenticated: Boolean(user && token),
      isPlatform: isPlatformRole(user?.role),
      login,
      logout,
      setAuthError,
    }),
    [user, token, authError, isRestoring, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
