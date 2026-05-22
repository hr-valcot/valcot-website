/**
 * Platform Role Permissions
 * Defines which platform roles can access which routes
 */

const PLATFORM_ROLES = ['SUPER_ADMIN', 'VALCOT_ADMIN', 'VALCOT_FINANCE']
const ADMIN_ROLES = ['SUPER_ADMIN', 'VALCOT_ADMIN']

export const routePermissions = {
  '/dashboard': PLATFORM_ROLES,
  '/companies': PLATFORM_ROLES,
  '/companies/:id': PLATFORM_ROLES,
  '/users': ADMIN_ROLES,
  '/audit-logs': ADMIN_ROLES,
  '/revenue': ['SUPER_ADMIN', 'VALCOT_FINANCE'],
  '/settings': ['SUPER_ADMIN'],
}

/**
 * Sidebar menu visibility per role
 */
export const menuPermissions = {
  dashboard: PLATFORM_ROLES,
  companies: PLATFORM_ROLES,
  users: ADMIN_ROLES,
  auditLogs: ADMIN_ROLES,
  revenue: ['SUPER_ADMIN', 'VALCOT_FINANCE'],
  settings: ['SUPER_ADMIN'],
}

/**
 * Action permissions per role
 */
export const actionPermissions = {
  // Company actions
  createCompany: ['SUPER_ADMIN'],
  editCompany: ['SUPER_ADMIN', 'VALCOT_ADMIN'],
  deleteCompany: ['SUPER_ADMIN'],
  toggleCompany: ['SUPER_ADMIN', 'VALCOT_ADMIN'],

  // User actions
  createUser: ADMIN_ROLES,
  editUserRole: ADMIN_ROLES,
  deleteUser: ADMIN_ROLES,

  // System
  editSettings: ['SUPER_ADMIN'],
}

export function isPlatformRole(role) {
  return PLATFORM_ROLES.includes(role)
}

export function hasRouteAccess(role, path) {
  if (!role || !path) return false

  if (routePermissions[path]) {
    return routePermissions[path].includes(role)
  }

  // Pattern match
  for (const [pattern, roles] of Object.entries(routePermissions)) {
    if (pattern.includes(':')) {
      const regex = new RegExp('^' + pattern.replace(/:[^/]+/g, '[^/]+') + '$')
      if (regex.test(path)) {
        return roles.includes(role)
      }
    }
  }

  return true
}

export function hasMenuAccess(role, menuKey) {
  if (!role || !menuKey) return false
  const allowed = menuPermissions[menuKey]
  return allowed ? allowed.includes(role) : false
}

export function hasActionAccess(role, action) {
  if (!role || !action) return false
  const allowed = actionPermissions[action]
  return allowed ? allowed.includes(role) : false
}

export function getDefaultRedirect() {
  return '/dashboard'
}
