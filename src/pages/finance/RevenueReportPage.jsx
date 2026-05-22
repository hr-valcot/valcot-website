import { useEffect, useState } from 'react'
import { Row, Col, Spin, Tag, Table, message } from 'antd'
import { DollarOutlined, TeamOutlined, BankOutlined, RiseOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip as ReTooltip, ResponsiveContainer } from 'recharts'
import * as platformService from '../../services/platformService'

export default function RevenueReportPage() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    loadRevenue()
  }, [])

  const loadRevenue = async () => {
    try {
      setLoading(true)
      const result = await platformService.getRevenue()
      setData(result)
    } catch (error) {
      message.error('Failed to load revenue data')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}><Spin size="large" /></div>

  const summary = data?.summary || {}
  const companies = data?.companies || []
  const planPricing = data?.planPricing || {}

  const chartData = companies
    .filter(c => c.monthlyRevenue > 0)
    .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
    .slice(0, 10)
    .map(c => ({
      name: c.name.length > 15 ? c.name.substring(0, 15) + '...' : c.name,
      revenue: c.monthlyRevenue,
    }))

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1440, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
          <DollarOutlined style={{ marginRight: 10, color: '#10b981' }} />
          Revenue & Billing
        </h1>
        <p style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>ภาพรวมรายได้และ Billing ของ Platform</p>
      </motion.div>

      {/* Summary Cards */}
      <Row gutter={[20, 20]} style={{ marginBottom: 28 }}>
        {[
          { label: 'รายได้ต่อเดือน', value: `฿${summary.totalMonthlyRevenue?.toLocaleString() || 0}`, icon: <DollarOutlined style={{ fontSize: 22, color: '#10b981' }} />, color: '#10b981' },
          { label: 'รายได้ต่อปี (ประมาณ)', value: `฿${summary.totalAnnualRevenue?.toLocaleString() || 0}`, icon: <RiseOutlined style={{ fontSize: 22, color: '#bfbfbf' }} />, color: '#bfbfbf' },
          { label: 'พนักงานทั้งหมด (Billable)', value: summary.totalEmployees || 0, icon: <TeamOutlined style={{ fontSize: 22, color: '#06b6d4' }} />, color: '#06b6d4' },
          { label: 'บริษัท Active', value: summary.activeCompanies || 0, icon: <BankOutlined style={{ fontSize: 22, color: '#f59e0b' }} />, color: '#f59e0b' },
        ].map((s, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="stat-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 11, color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{s.label}</p>
                  <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{s.value}</h2>
                </div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${s.color}15` }}>
                  {s.icon}
                </div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Pricing Info */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-card-static" style={{ padding: '16px 24px', marginBottom: 20, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>💰 อัตราค่าบริการ:</span>
        {Object.entries(planPricing).map(([plan, price]) => (
          <Tag key={plan} style={{ borderRadius: 6, textTransform: 'capitalize', fontSize: 12 }}
            color={plan === 'premium' ? 'gold' : plan === 'standard' ? 'geekblue' : 'default'}>
            {plan}: ฿{price}/คน/เดือน
          </Tag>
        ))}
      </motion.div>

      <Row gutter={[20, 20]}>
        {/* Chart */}
        <Col xs={24} lg={10}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card-static" style={{ padding: 24, height: '100%' }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 20 }}>Revenue ตามบริษัท (Top 10)</h3>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <XAxis type="number" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <YAxis type="category" dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} width={120} />
                  <ReTooltip contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: '#f1f5f9' }}
                    formatter={(value) => [`฿${value.toLocaleString()}`, 'Revenue']} />
                  <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[0, 6, 6, 0]} />
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>ยังไม่มีข้อมูล</div>
            )}
          </motion.div>
        </Col>

        {/* Table */}
        <Col xs={24} lg={14}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="glass-card-static" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', margin: 0 }}>รายละเอียด Billing ตามบริษัท</h3>
            </div>
            <Table dataSource={companies} rowKey="id" size="small" pagination={{ pageSize: 10, showSizeChanger: false }}
              columns={[
                { title: 'บริษัท', dataIndex: 'name', render: (name, r) => (
                  <div>
                    <div style={{ fontWeight: 500, color: '#e2e8f0', fontSize: 12.5 }}>{name}</div>
                    <div style={{ fontSize: 10, color: '#64748b' }}>{r.code || '-'}</div>
                  </div>
                )},
                { title: 'Plan', dataIndex: 'plan', width: 90, align: 'center',
                  render: p => <Tag color={p === 'premium' ? 'gold' : p === 'standard' ? 'blue' : 'default'} style={{ borderRadius: 6, textTransform: 'capitalize', fontSize: 10 }}>{p}</Tag>,
                },
                { title: 'พนักงาน', dataIndex: 'employeeCount', width: 80, align: 'center',
                  render: v => <span style={{ fontWeight: 600, color: '#e5e5e5' }}>{v}</span>,
                },
                { title: 'Revenue/เดือน', dataIndex: 'monthlyRevenue', width: 120, align: 'right',
                  render: v => <span style={{ fontWeight: 600, color: '#10b981', fontSize: 13 }}>฿{v?.toLocaleString()}</span>,
                },
                { title: 'สถานะ', dataIndex: 'isActive', width: 80, align: 'center',
                  render: a => <Tag color={a ? 'success' : 'error'} style={{ borderRadius: 6, fontSize: 10 }}>{a ? 'Active' : 'Inactive'}</Tag>,
                },
              ]}
            />
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}
