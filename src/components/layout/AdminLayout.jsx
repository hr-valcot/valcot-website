import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import AdminSidebar from './AdminSidebar'

const { Content } = Layout

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AdminSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 272,
          transition: 'margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'linear-gradient(135deg, #0a0a12 0%, #111827 50%, #0f172a 100%)',
        }}
      >
        <Content style={{ minHeight: '100vh', padding: 0 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
