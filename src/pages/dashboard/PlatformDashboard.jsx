import { useEffect, useState } from 'react'
import { Row, Col, Spin, Tag, Avatar, Table, message } from 'antd'
import {
  BankOutlined, TeamOutlined, UserOutlined, DollarOutlined,
  RiseOutlined, CheckCircleOutlined, CloseCircleOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip as ReTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useAuth } from '../../hooks/useAuth'
import * as platformService from '../../services/platformService'
import dayjs from 'dayjs'

const CHART_COLORS = ['#7a7a7a', '#bfbfbf', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#d4d4d4']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function StatCard({ icon, label, value, suffix, trend, color, delay = 0 }) {
  return (
    <motion.div variants={itemVariants} className="stat-card" style={{ height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ fontSize: 12, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            {label}
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: '#f1f5f9', margin: 0, letterSpacing: '-0.02em' }}>
            {typeof value === 'number' ? value.toLocaleString() : value}
            {suffix && <span style={{ fontSize: 14, color: '#94a3b8', marginLeft: 4 }}>{suffix}</span>}
          </h2>
          {trend !== undefined && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
              <ArrowUpOutlined style={{ fontSize: 11, color: '#10b981' }} />
              <span style={{ fontSize: 12, color: '#10b981', fontWeight: 500 }}>+{trend}</span>
              <span style={{ fontSize: 11, color: '#64748b' }}>เดือนนี้</span>
            </div>
          )}
        </div>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: `linear-gradient(135deg, ${color}20, ${color}08)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${color}15`,
        }}>
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

export default function PlatformDashboard() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    loadDashboard()
  }, [])

  const loadDashboard = async () => {
    try {
      setLoading(true)
      const result = await platformService.getDashboard()
      setData(result)
    } catch (error) {
      message.error('Failed to load dashboard')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <Spin size="large" />
      </div>
    )
  }

  const stats = data?.stats || {}
  const topCompanies = data?.topCompanies || []
  const recentActivity = data?.recentActivity || []

  // Prepare chart data
  const companyChartData = topCompanies.slice(0, 8).map(c => ({
    name: c.name.length > 12 ? c.name.substring(0, 12) + '...' : c.name,
    employees: c.employeeCount,
    users: c.userCount,
  }))

  const statusData = [
    { name: 'Active', value: stats.activeCompanies || 0 },
    { name: 'Inactive', value: stats.inactiveCompanies || 0 },
  ]

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1440, margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: 32 }}
      >
        <h1 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0, letterSpacing: '-0.02em' }}>
          Platform Dashboard
        </h1>
        <p style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>
          สวัสดี, {user?.fullName} — ภาพรวม Platform ทั้งหมด
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Row gutter={[20, 20]} style={{ marginBottom: 28 }}>
          <Col xs={24} sm={12} lg={6}>
            <StatCard
              icon={<BankOutlined style={{ fontSize: 22, color: '#7a7a7a' }} />}
              label="บริษัททั้งหมด"
              value={stats.totalCompanies}
              trend={stats.newCompaniesThisMonth}
              color="#7a7a7a"
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatCard
              icon={<TeamOutlined style={{ fontSize: 22, color: '#bfbfbf' }} />}
              label="พนักงานทั้งหมด"
              value={stats.totalEmployees}
              suffix="คน"
              color="#bfbfbf"
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatCard
              icon={<UserOutlined style={{ fontSize: 22, color: '#06b6d4' }} />}
              label="ผู้ใช้ระบบ"
              value={stats.totalUsers}
              color="#06b6d4"
            />
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <StatCard
              icon={<DollarOutlined style={{ fontSize: 22, color: '#10b981' }} />}
              label="Payroll เดือนนี้"
              value={`฿${(Number(stats.monthlyPayroll) || 0).toLocaleString()}`}
              color="#10b981"
            />
          </Col>
        </Row>
      </motion.div>

      {/* Charts */}
      <Row gutter={[20, 20]} style={{ marginBottom: 28 }}>
        <Col xs={24} lg={16}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card-static"
            style={{ padding: 24, height: '100%' }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 20 }}>
              พนักงานตามบริษัท (Top 8)
            </h3>
            {companyChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={companyChartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
                  <ReTooltip
                    contentStyle={{
                      background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 10, color: '#f1f5f9',
                    }}
                  />
                  <Bar dataKey="employees" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7a7a7a" />
                      <stop offset="100%" stopColor="#bfbfbf" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                ยังไม่มีข้อมูลบริษัท
              </div>
            )}
          </motion.div>
        </Col>

        <Col xs={24} lg={8}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card-static"
            style={{ padding: 24, height: '100%' }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 20 }}>
              สถานะบริษัท
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#ef4444" />
                </Pie>
                <ReTooltip
                  contentStyle={{
                    background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 10, color: '#f1f5f9',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: '#10b981' }} />
                <span style={{ fontSize: 12, color: '#94a3b8' }}>Active ({stats.activeCompanies})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: '#ef4444' }} />
                <span style={{ fontSize: 12, color: '#94a3b8' }}>Inactive ({stats.inactiveCompanies})</span>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* Top Companies + Recent Activity */}
      <Row gutter={[20, 20]}>
        <Col xs={24} lg={14}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card-static"
            style={{ padding: 24 }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 16 }}>
              บริษัทลูกค้า
            </h3>
            <Table
              dataSource={topCompanies}
              rowKey="id"
              pagination={false}
              size="small"
              columns={[
                {
                  title: 'บริษัท',
                  dataIndex: 'name',
                  render: (name, record) => (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Avatar size={32} style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', fontSize: 13, fontWeight: 600 }}>
                        {name?.charAt(0)}
                      </Avatar>
                      <div>
                        <div style={{ fontWeight: 500, color: '#f1f5f9', fontSize: 13 }}>{name}</div>
                        <div style={{ fontSize: 11, color: '#64748b' }}>{record.code || '-'}</div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: 'พนักงาน',
                  dataIndex: 'employeeCount',
                  align: 'center',
                  render: v => <span style={{ fontWeight: 600, color: '#e5e5e5' }}>{v}</span>,
                },
                {
                  title: 'Plan',
                  dataIndex: 'subscriptionPlan',
                  align: 'center',
                  render: plan => (
                    <Tag
                      color={plan === 'premium' ? 'gold' : plan === 'standard' ? 'blue' : 'default'}
                      style={{ borderRadius: 6, textTransform: 'capitalize', fontSize: 11 }}
                    >
                      {plan || 'basic'}
                    </Tag>
                  ),
                },
                {
                  title: 'สถานะ',
                  dataIndex: 'isActive',
                  align: 'center',
                  render: active => active
                    ? <Tag icon={<CheckCircleOutlined />} color="success" style={{ borderRadius: 6, fontSize: 11 }}>Active</Tag>
                    : <Tag icon={<CloseCircleOutlined />} color="error" style={{ borderRadius: 6, fontSize: 11 }}>Inactive</Tag>,
                },
              ]}
            />
          </motion.div>
        </Col>

        <Col xs={24} lg={10}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card-static"
            style={{ padding: 24 }}
          >
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 16 }}>
              กิจกรรมล่าสุด
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {recentActivity.length === 0 && (
                <p style={{ color: '#64748b', fontSize: 13, textAlign: 'center', padding: 20 }}>
                  ยังไม่มีกิจกรรม
                </p>
              )}
              {recentActivity.slice(0, 8).map((log) => (
                <div
                  key={log.id}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '10px 12px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.03)',
                  }}
                >
                  <Avatar size={28} style={{ background: 'rgba(122,122,122,0.15)', color: '#e5e5e5', fontSize: 11, flexShrink: 0, marginTop: 2 }}>
                    {log.user?.fullName?.charAt(0) || '?'}
                  </Avatar>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, color: '#e2e8f0' }}>
                      <span style={{ fontWeight: 600 }}>{log.user?.fullName}</span>
                      {' '}
                      <Tag
                        style={{ margin: 0, fontSize: 10, borderRadius: 4, padding: '0 4px' }}
                        color={log.action === 'CREATE' ? 'green' : log.action === 'DELETE' ? 'red' : 'blue'}
                      >
                        {log.action}
                      </Tag>
                      {' '}{log.resource}
                    </div>
                    <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>
                      {dayjs(log.createdAt).format('DD MMM YYYY HH:mm')}
                      {log.user?.company?.name && ` • ${log.user.company.name}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}
