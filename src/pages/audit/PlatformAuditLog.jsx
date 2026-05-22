import { useEffect, useState, useCallback } from 'react'
import { Table, Input, Select, Tag, DatePicker, message } from 'antd'
import { SearchOutlined, SafetyCertificateOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import * as platformService from '../../services/platformService'
import dayjs from 'dayjs'

const ACTION_COLORS = {
  CREATE: 'green', UPDATE: 'blue', DELETE: 'red',
  LOGIN: 'cyan', LOGOUT: 'default', APPROVE: 'lime',
  REJECT: 'orange', EXPORT: 'default', VIEW_SENSITIVE: 'gold',
}

export default function PlatformAuditLog() {
  const [loading, setLoading] = useState(true)
  const [logs, setLogs] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 30, total: 0 })
  const [companyFilter, setCompanyFilter] = useState('')
  const [actionFilter, setActionFilter] = useState('')
  const [dateRange, setDateRange] = useState(null)
  const [companies, setCompanies] = useState([])

  const loadLogs = useCallback(async (page = 1) => {
    try {
      setLoading(true)
      const params = { page, limit: pagination.limit, companyId: companyFilter, action: actionFilter }
      if (dateRange?.[0]) params.startDate = dateRange[0].toISOString()
      if (dateRange?.[1]) params.endDate = dateRange[1].toISOString()
      const data = await platformService.getAuditLogs(params)
      setLogs(data.logs || [])
      setPagination(p => ({ ...p, page, total: data.pagination?.total || 0 }))
    } catch (error) {
      message.error('Failed to load audit logs')
    } finally {
      setLoading(false)
    }
  }, [companyFilter, actionFilter, dateRange, pagination.limit])

  useEffect(() => { loadLogs(1) }, [companyFilter, actionFilter, dateRange])

  useEffect(() => {
    platformService.listCompanies({ limit: 100 }).then(d => setCompanies(d.companies || [])).catch(() => {})
  }, [])

  const columns = [
    {
      title: 'เวลา',
      dataIndex: 'createdAt',
      width: 150,
      render: d => <span style={{ fontSize: 12, color: '#94a3b8', fontFamily: 'monospace' }}>{dayjs(d).format('DD/MM/YY HH:mm:ss')}</span>,
    },
    {
      title: 'ผู้ใช้',
      dataIndex: 'user',
      width: 180,
      render: u => (
        <div>
          <div style={{ fontWeight: 500, color: '#e2e8f0', fontSize: 12.5 }}>{u?.fullName || '-'}</div>
          <div style={{ fontSize: 10, color: '#64748b' }}>{u?.company?.name || 'Platform'}</div>
        </div>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: 110,
      render: action => <Tag color={ACTION_COLORS[action] || 'default'} style={{ borderRadius: 6, fontSize: 11 }}>{action}</Tag>,
    },
    {
      title: 'Resource',
      dataIndex: 'resource',
      width: 120,
      render: v => <span style={{ color: '#cbd5e1', fontSize: 12.5 }}>{v}</span>,
    },
    {
      title: 'Resource ID',
      dataIndex: 'resourceId',
      width: 120,
      render: v => v ? <code style={{ fontSize: 10, color: '#64748b', background: 'rgba(255,255,255,0.04)', padding: '2px 6px', borderRadius: 4 }}>{v?.substring(0, 8)}...</code> : '-',
    },
    {
      title: 'IP',
      dataIndex: 'ipAddress',
      width: 120,
      render: v => <span style={{ fontSize: 11, color: '#64748b', fontFamily: 'monospace' }}>{v || '-'}</span>,
    },
    {
      title: 'รายละเอียด',
      dataIndex: 'details',
      render: v => <span style={{ fontSize: 12, color: '#94a3b8' }}>{v || '-'}</span>,
    },
  ]

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1440, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
          <SafetyCertificateOutlined style={{ marginRight: 10, color: '#e5e5e5' }} />
          Audit Logs
        </h1>
        <p style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>ประวัติการใช้งานทั้ง Platform — ทั้งหมด {pagination.total} รายการ</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-card-static" style={{ padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Select placeholder="บริษัท" value={companyFilter || undefined} onChange={v => setCompanyFilter(v || '')}
          allowClear style={{ width: 200 }} showSearch optionFilterProp="label"
          options={[{ label: 'ทั้งหมด', value: '' }, ...companies.map(c => ({ label: c.name, value: c.id }))]} />
        <Select placeholder="Action" value={actionFilter || undefined} onChange={v => setActionFilter(v || '')}
          allowClear style={{ width: 140 }}
          options={[{ label: 'ทั้งหมด', value: '' }, ...Object.keys(ACTION_COLORS).map(a => ({ label: a, value: a }))]} />
        <DatePicker.RangePicker
          onChange={setDateRange}
          style={{ borderRadius: 10 }}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-card-static" style={{ padding: 0, overflow: 'hidden' }}>
        <Table dataSource={logs} columns={columns} rowKey="id" loading={loading} size="small"
          pagination={{
            current: pagination.page, pageSize: pagination.limit, total: pagination.total,
            onChange: page => loadLogs(page), showTotal: total => `ทั้งหมด ${total} รายการ`, showSizeChanger: false,
          }} />
      </motion.div>
    </div>
  )
}
