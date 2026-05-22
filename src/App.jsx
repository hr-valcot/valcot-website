import { Navigate, Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import thTH from 'antd/locale/th_TH'
import themeConfig from './config/theme'
import ProtectedRoute from './components/ProtectedRoute'
import PlatformRoleGuard from './components/PlatformRoleGuard'
import AdminLayout from './components/layout/AdminLayout'

// Pages
import LoginPage from './pages/Login'
import PlatformDashboard from './pages/dashboard/PlatformDashboard'
import CompanyListPage from './pages/companies/CompanyListPage'
import CompanyDetailPage from './pages/companies/CompanyDetailPage'
import PlatformUserManagement from './pages/users/PlatformUserManagement'
import PlatformAuditLog from './pages/audit/PlatformAuditLog'
import RevenueReportPage from './pages/finance/RevenueReportPage'

const ADMIN_ROLES = ['SUPER_ADMIN', 'VALCOT_ADMIN']

function App() {
  return (
    <ConfigProvider theme={themeConfig} locale={thTH}>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Platform Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<PlatformDashboard />} />

          {/* Companies */}
          <Route path="/companies" element={<CompanyListPage />} />
          <Route path="/companies/:id" element={<CompanyDetailPage />} />

          {/* Users (SUPER_ADMIN + VALCOT_ADMIN only) */}
          <Route path="/users" element={
            <PlatformRoleGuard allowedRoles={ADMIN_ROLES}>
              <PlatformUserManagement />
            </PlatformRoleGuard>
          } />

          {/* Audit Logs (SUPER_ADMIN + VALCOT_ADMIN only) */}
          <Route path="/audit-logs" element={
            <PlatformRoleGuard allowedRoles={ADMIN_ROLES}>
              <PlatformAuditLog />
            </PlatformRoleGuard>
          } />

          {/* Revenue (SUPER_ADMIN + VALCOT_FINANCE) */}
          <Route path="/revenue" element={
            <PlatformRoleGuard allowedRoles={['SUPER_ADMIN', 'VALCOT_FINANCE']}>
              <RevenueReportPage />
            </PlatformRoleGuard>
          } />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </ConfigProvider>
  )
}

export default App
