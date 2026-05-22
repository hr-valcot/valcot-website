import { useEffect, useState, useCallback } from 'react'
import { Table, Button, Input, Select, Tag, Avatar, Modal, Form, message, Space } from 'antd'
import { PlusOutlined, SearchOutlined, TeamOutlined, EditOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useAuth } from '../../hooks/useAuth'
import * as platformService from '../../services/platformService'
import dayjs from 'dayjs'

const ROLE_COLORS = {
  SUPER_ADMIN: { color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
  VALCOT_ADMIN: { color: '#bfbfbf', bg: 'rgba(191,191,191,0.1)' },
  VALCOT_FINANCE: { color: '#06b6d4', bg: 'rgba(6,182,212,0.1)' },
  ADMIN: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  HR: { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
  FINANCE: { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  SUPERVISOR: { color: '#a8a8a8', bg: 'rgba(168,168,168,0.1)' },
  EMPLOYEE: { color: '#94a3b8', bg: 'rgba(148,163,184,0.1)' },
}

export default function PlatformUserManagement() {
  const { user: currentUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 })
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('')
  const [companyFilter, setCompanyFilter] = useState('')
  const [companies, setCompanies] = useState([])
  const [assignableRoles, setAssignableRoles] = useState([])
  const [createOpen, setCreateOpen] = useState(false)
  const [roleEditOpen, setRoleEditOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [form] = Form.useForm()
  const [roleForm] = Form.useForm()

  const loadUsers = useCallback(async (page = 1) => {
    try {
      setLoading(true)
      const data = await platformService.listUsers({ page, limit: pagination.limit, search, role: roleFilter, companyId: companyFilter })
      setUsers(data.users || [])
      setPagination(p => ({ ...p, page, total: data.pagination?.total || 0 }))
    } catch (error) {
      message.error('Failed to load users')
    } finally {
      setLoading(false)
    }
  }, [search, roleFilter, companyFilter, pagination.limit])

  useEffect(() => { loadUsers(1) }, [search, roleFilter, companyFilter])

  useEffect(() => {
    platformService.listCompanies({ limit: 100 }).then(d => setCompanies(d.companies || [])).catch(() => {})
    platformService.getAssignableRoles().then(d => setAssignableRoles(d.roles || [])).catch(() => {})
  }, [])

  const handleCreate = async (values) => {
    try {
      setSubmitting(true)
      await platformService.createUser(values)
      message.success('สร้างผู้ใช้สำเร็จ')
      setCreateOpen(false)
      form.resetFields()
      loadUsers(1)
    } catch (error) {
      message.error(error.message || 'สร้างผู้ใช้ไม่สำเร็จ')
    } finally {
      setSubmitting(false)
    }
  }

  const handleRoleChange = async (values) => {
    try {
      setSubmitting(true)
      await platformService.updateUserRole(editingUser.id, values.role)
      message.success('เปลี่ยน Role สำเร็จ')
      setRoleEditOpen(false)
      setEditingUser(null)
      loadUsers(pagination.page)
    } catch (error) {
      message.error(error.message || 'เปลี่ยน Role ไม่สำเร็จ')
    } finally {
      setSubmitting(false)
    }
  }

  const columns = [
    {
      title: 'ผู้ใช้',
      dataIndex: 'fullName',
      render: (name, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar size={36} style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>
            {name?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div>
            <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: 13 }}>{name}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      width: 150,
      render: (role) => {
        const rc = ROLE_COLORS[role] || ROLE_COLORS.EMPLOYEE
        return (
          <Tag style={{ borderRadius: 6, fontSize: 11, fontWeight: 600, background: rc.bg, color: rc.color, border: `1px solid ${rc.color}30` }}>
            {role}
          </Tag>
        )
      },
    },
    {
      title: 'บริษัท',
      dataIndex: 'company',
      width: 180,
      render: (company) => company ? (
        <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>{company.name}</div>
      ) : <span style={{ color: '#64748b', fontSize: 12 }}>— Platform —</span>,
    },
    {
      title: 'สร้างเมื่อ',
      dataIndex: 'createdAt',
      width: 120,
      render: d => <span style={{ fontSize: 12, color: '#94a3b8' }}>{dayjs(d).format('DD MMM YY HH:mm')}</span>,
    },
    {
      title: '',
      key: 'actions',
      width: 80,
      render: (_, record) => {
        if (record.id === currentUser?.id) return null
        return (
          <Button type="text" size="small" icon={<EditOutlined />} style={{ color: '#a8a8a8' }}
            onClick={() => {
              setEditingUser(record)
              roleForm.setFieldsValue({ role: record.role })
              setRoleEditOpen(true)
            }}
          />
        )
      },
    },
  ]

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1440, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
            <TeamOutlined style={{ marginRight: 10, color: '#e5e5e5' }} />
            จัดการผู้ใช้
          </h1>
          <p style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>จัดการผู้ใช้ทุกบริษัท — ทั้งหมด {pagination.total} คน</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setCreateOpen(true)}
          style={{ height: 42, borderRadius: 12, fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', border: 'none', boxShadow: '0 4px 16px rgba(59, 130, 246, 0.35)' }}>
          เพิ่มผู้ใช้
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-card-static" style={{ padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Input prefix={<SearchOutlined style={{ color: '#64748b' }} />} placeholder="ค้นหาชื่อหรืออีเมล..."
          value={search} onChange={e => setSearch(e.target.value)} allowClear style={{ maxWidth: 280, borderRadius: 10 }} />
        <Select placeholder="Role" value={roleFilter || undefined} onChange={v => setRoleFilter(v || '')} allowClear style={{ width: 160 }}
          options={[
            { label: 'ทั้งหมด', value: '' },
            ...Object.keys(ROLE_COLORS).map(r => ({ label: r, value: r })),
          ]} />
        <Select placeholder="บริษัท" value={companyFilter || undefined} onChange={v => setCompanyFilter(v || '')} allowClear style={{ width: 200 }}
          showSearch optionFilterProp="label"
          options={[
            { label: 'ทั้งหมด', value: '' },
            ...companies.map(c => ({ label: c.name, value: c.id })),
          ]} />
      </motion.div>

      {/* Table */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-card-static" style={{ padding: 0, overflow: 'hidden' }}>
        <Table dataSource={users} columns={columns} rowKey="id" loading={loading}
          pagination={{
            current: pagination.page, pageSize: pagination.limit, total: pagination.total,
            onChange: (page) => loadUsers(page), showTotal: (total) => `ทั้งหมด ${total} คน`, showSizeChanger: false,
          }} />
      </motion.div>

      {/* Create User Modal */}
      <Modal title="เพิ่มผู้ใช้ใหม่" open={createOpen} onCancel={() => { setCreateOpen(false); form.resetFields() }}
        footer={null} width={520} destroyOnClose>
        <Form form={form} layout="vertical" onFinish={handleCreate} style={{ marginTop: 16 }}>
          <Form.Item name="fullName" label="ชื่อ-นามสกุล" rules={[{ required: true }]}><Input /></Form.Item>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Form.Item name="email" label="อีเมล" rules={[{ required: true, type: 'email' }]}><Input /></Form.Item>
            <Form.Item name="password" label="รหัสผ่าน" rules={[{ required: true, min: 6 }]}><Input.Password /></Form.Item>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Form.Item name="role" label="Role" rules={[{ required: true }]}>
              <Select options={assignableRoles.map(r => ({ label: r, value: r }))} />
            </Form.Item>
            <Form.Item name="companyId" label="บริษัท">
              <Select allowClear placeholder="เลือกบริษัท" showSearch optionFilterProp="label"
                options={companies.map(c => ({ label: c.name, value: c.id }))} />
            </Form.Item>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 16 }}>
            <Button onClick={() => { setCreateOpen(false); form.resetFields() }}>ยกเลิก</Button>
            <Button type="primary" htmlType="submit" loading={submitting}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', border: 'none' }}>สร้างผู้ใช้</Button>
          </div>
        </Form>
      </Modal>

      {/* Change Role Modal */}
      <Modal title={`เปลี่ยน Role: ${editingUser?.fullName || ''}`} open={roleEditOpen}
        onCancel={() => { setRoleEditOpen(false); setEditingUser(null) }}
        footer={null} width={400} destroyOnClose>
        <Form form={roleForm} layout="vertical" onFinish={handleRoleChange} style={{ marginTop: 16 }}>
          <Form.Item name="role" label="Role ใหม่" rules={[{ required: true }]}>
            <Select options={assignableRoles.map(r => ({ label: r, value: r }))} />
          </Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <Button onClick={() => setRoleEditOpen(false)}>ยกเลิก</Button>
            <Button type="primary" htmlType="submit" loading={submitting}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', border: 'none' }}>บันทึก</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
