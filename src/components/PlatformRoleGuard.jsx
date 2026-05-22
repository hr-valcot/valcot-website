import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { hasRouteAccess } from '../config/rolePermissions'

export default function PlatformRoleGuard({ children, allowedRoles }) {
  const { user } = useAuth()
  const location = useLocation()
  const role = user?.role

  const hasAccess = allowedRoles
    ? allowedRoles.includes(role)
    : hasRouteAccess(role, location.pathname)

  if (!hasAccess) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}
