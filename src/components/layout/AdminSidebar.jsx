import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Layout, Menu, Avatar, Badge, Tooltip } from 'antd'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DashboardOutlined,
  BankOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CrownOutlined,
} from '@ant-design/icons'
import { useAuth } from '../../hooks/useAuth'
import { hasMenuAccess } from '../../config/rolePermissions'

const { Sider } = Layout

const menuConfig = [
  {
    key: 'overview',
    label: 'Overview',
    type: 'group',
    children: [
      { key: '/dashboard', label: 'Dashboard', icon: <DashboardOutlined />, menuKey: 'dashboard' },
    ],
  },
  {
    key: 'management',
    label: 'Management',
    type: 'group',
    children: [
      { key: '/companies', label: 'จัดการบริษัท', icon: <BankOutlined />, menuKey: 'companies' },
      { key: '/users', label: 'จัดการผู้ใช้', icon: <TeamOutlined />, menuKey: 'users' },
    ],
  },
  {
    key: 'monitoring',
    label: 'Monitoring',
    type: 'group',
    children: [
      { key: '/audit-logs', label: 'Audit Logs', icon: <SafetyCertificateOutlined />, menuKey: 'auditLogs' },
      { key: '/revenue', label: 'Revenue & Billing', icon: <DollarOutlined />, menuKey: 'revenue' },
    ],
  },
  {
    key: 'system',
    label: 'System',
    type: 'group',
    children: [
      { key: '/settings', label: 'ตั้งค่าระบบ', icon: <SettingOutlined />, menuKey: 'settings' },
    ],
  },
]

const roleBadge = {
  SUPER_ADMIN: { label: 'Super Admin', bg: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#fff' },
  VALCOT_ADMIN: { label: 'Valcot Admin', bg: 'linear-gradient(135deg, #7a7a7a, #bfbfbf)', color: '#fff' },
  VALCOT_FINANCE: { label: 'Valcot Finance', bg: 'linear-gradient(135deg, #10b981, #06b6d4)', color: '#fff' },
}

export default function AdminSidebar({ collapsed, setCollapsed }) {
  const { user, logout } = useAuth()
  const location = useLocation()
  const role = user?.role

  const filteredMenuItems = useMemo(() => {
    return menuConfig
      .map(group => ({
        ...group,
        children: group.children?.filter(item => hasMenuAccess(role, item.menuKey)),
      }))
      .filter(group => group.children?.length > 0)
  }, [role])

  const menuItems = useMemo(() => {
    return filteredMenuItems.map(group => ({
      key: group.key,
      label: !collapsed ? (
        <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(148,163,184,0.5)' }}>
          {group.label}
        </span>
      ) : null,
      type: 'group',
      children: group.children?.map(item => ({
        key: item.key,
        icon: item.icon,
        label: (
          <NavLink to={item.key} className="sidebar-nav-link">
            {item.label}
          </NavLink>
        ),
      })),
    }))
  }, [filteredMenuItems, collapsed])

  const badge = roleBadge[role] || roleBadge.VALCOT_ADMIN

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={272}
      collapsedWidth={80}
      className="admin-sidebar"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, #0b0f16 0%, #0f141d 40%, #111827 100%)',
        borderRight: '1px solid rgba(255,255,255,0.04)',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={false}
        animate={{ padding: collapsed ? '20px 16px' : '24px 24px 20px' }}
        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 42, height: 42, borderRadius: 12, flexShrink: 0,
              background: 'white',
               boxShadow: '0 4px 16px rgba(122, 122, 122, 0.4)',
            }}
          >
            <img src="/logos.svg" alt="Valcot" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h1 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Valcot</h1>
                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#64748b', margin: 0, marginTop: 1 }}>
                  Platform Admin
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Collapse Toggle */}
      <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            padding: '8px 12px', borderRadius: 10,
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
            color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ fontSize: 12 }}
              >
                ย่อเมนู
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Navigation */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '12px 0' }}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ background: 'transparent', border: 'none' }}
        />
      </div>

      {/* User Profile */}
      <motion.div
        initial={false}
        animate={{ padding: collapsed ? '16px 12px' : '16px 20px' }}
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: 12, borderRadius: 12, cursor: 'pointer',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.04)',
            transition: 'all 0.2s',
          }}
        >
          <Badge dot status="success" offset={[-4, 36]}>
            <Avatar
              size={collapsed ? 38 : 42}
              style={{
                background: 'linear-gradient(135deg, #7a7a7a 0%, #bfbfbf 100%)',
                fontSize: collapsed ? 15 : 17,
                fontWeight: 600,
              }}
            >
              {user?.fullName?.charAt(0)?.toUpperCase() || 'V'}
            </Avatar>
          </Badge>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                style={{ flex: 1, minWidth: 0 }}
              >
                <p style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user?.fullName || 'Admin'}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '2px 8px', borderRadius: 6, marginTop: 4,
                  background: badge.bg, fontSize: 9, fontWeight: 700,
                  color: badge.color, letterSpacing: '0.02em',
                }}>
                  {badge.label}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!collapsed && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Tooltip title="ออกจากระบบ">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); logout() }}
                    style={{
                      padding: 8, borderRadius: 8, border: 'none', cursor: 'pointer',
                      background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444',
                      display: 'flex', alignItems: 'center', transition: 'all 0.2s',
                    }}
                  >
                    <LogoutOutlined />
                  </motion.button>
                </Tooltip>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Sider>
  )
}
