/**
 * Platform Service
 * API calls for /api/platform/* endpoints
 */
import api from './api'

// ============= Dashboard =============
export const getDashboard = () => api.get('/api/platform/dashboard')

// ============= Companies =============
export const listCompanies = (params = {}) => {
  const query = new URLSearchParams()
  if (params.page) query.set('page', params.page)
  if (params.limit) query.set('limit', params.limit)
  if (params.search) query.set('search', params.search)
  if (params.status) query.set('status', params.status)
  if (params.sortBy) query.set('sortBy', params.sortBy)
  if (params.sortOrder) query.set('sortOrder', params.sortOrder)
  return api.get(`/api/platform/companies?${query.toString()}`)
}

export const getCompanyDetail = (id) => api.get(`/api/platform/companies/${id}`)

export const createCompany = (data) => api.post('/api/platform/companies', data)

export const updateCompany = (id, data) => api.put(`/api/platform/companies/${id}`, data)

export const deleteCompany = (id) => api.delete(`/api/platform/companies/${id}`)

export const toggleCompany = (id) => api.patch(`/api/platform/companies/${id}/toggle`)

export const getCompanySettings = (id) => api.get(`/api/platform/companies/${id}/settings`)

export const updateCompanySettings = (id, data) => api.put(`/api/platform/companies/${id}/settings`, data)

// ============= Users =============
export const listUsers = (params = {}) => {
  const query = new URLSearchParams()
  if (params.page) query.set('page', params.page)
  if (params.limit) query.set('limit', params.limit)
  if (params.search) query.set('search', params.search)
  if (params.role) query.set('role', params.role)
  if (params.companyId) query.set('companyId', params.companyId)
  return api.get(`/api/platform/users?${query.toString()}`)
}

export const createUser = (data) => api.post('/api/platform/users', data)

export const updateUserRole = (id, role) => api.patch(`/api/platform/users/${id}/role`, { role })

export const getAssignableRoles = () => api.get('/api/platform/assignable-roles')

// ============= Audit Logs =============
export const getAuditLogs = (params = {}) => {
  const query = new URLSearchParams()
  if (params.page) query.set('page', params.page)
  if (params.limit) query.set('limit', params.limit)
  if (params.companyId) query.set('companyId', params.companyId)
  if (params.action) query.set('action', params.action)
  if (params.startDate) query.set('startDate', params.startDate)
  if (params.endDate) query.set('endDate', params.endDate)
  return api.get(`/api/platform/audit-logs?${query.toString()}`)
}

// ============= Revenue =============
export const getRevenue = () => api.get('/api/platform/revenue')
