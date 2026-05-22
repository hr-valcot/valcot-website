import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Spin } from 'antd'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isRestoring } = useAuth()

  if (isRestoring) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100vh', background: '#0a0a12',
      }}>
        <Spin size="large" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}
