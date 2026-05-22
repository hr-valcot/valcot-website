import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Input, Select, Tag, Avatar, Modal, Form, message, Space, Tooltip, Popconfirm } from 'antd'
import {
  PlusOutlined, SearchOutlined, BankOutlined, EditOutlined,
  DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined,
  PoweroffOutlined, EyeOutlined, TeamOutlined,
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useAuth } from '../../hooks/useAuth'
import { hasActionAccess } from '../../config/rolePermissions'
import * as platformService from '../../services/platformService'
import dayjs from 'dayjs'

export default function CompanyListPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const role = user?.role

  const [loading, setLoading] = useState(true)
  const [companies, setCompanies] = useState([])
  const [pagination, setPagination] = useState({ page: 1, limit: 15, total: 0 })
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editingCompany, setEditingCompany] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [createForm] = Form.useForm()
  const [editForm] = Form.useForm()

  const canCreate = hasActionAccess(role, 'createCompany')
  const canEdit = hasActionAccess(role, 'editCompany')
  const canDelete = hasActionAccess(role, 'deleteCompany')
  const canToggle = hasActionAccess(role, 'toggleCompany')

  const loadCompanies = useCallback(async (page = 1) => {
    try {
      setLoading(true)
      const data = await platformService.listCompanies({
        page, limit: pagination.limit, search, status: statusFilter,
      })
      setCompanies(data.companies || [])
      setPagination(prev => ({ ...prev, page, total: data.pagination?.total || 0 }))
    } catch (error) {
      message.error('Failed to load companies')
    } finally {
      setLoading(false)
    }
  }, [search, statusFilter, pagination.limit])

  useEffect(() => { loadCompanies(1) }, [search, statusFilter])

  const handleCreate = async (values) => {
    try {
      setSubmitting(true)
      await platformService.createCompany(values)
      message.success('สร้างบริษัทสำเร็จ')
      setCreateModalOpen(false)
      createForm.resetFields()
      loadCompanies(1)
    } catch (error) {
      message.error(error.message || 'สร้างบริษัทไม่สำเร็จ')
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = async (values) => {
    try {
      setSubmitting(true)
      await platformService.updateCompany(editingCompany.id, values)
      message.success('อัพเดทบริษัทสำเร็จ')
      setEditModalOpen(false)
      setEditingCompany(null)
      editForm.resetFields()
      loadCompanies(pagination.page)
    } catch (error) {
      message.error(error.message || 'อัพเดทไม่สำเร็จ')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await platformService.deleteCompany(id)
      message.success('ลบบริษัทสำเร็จ')
      loadCompanies(pagination.page)
    } catch (error) {
      message.error(error.message || 'ลบไม่สำเร็จ')
    }
  }

  const handleToggle = async (id) => {
    try {
      const result = await platformService.toggleCompany(id)
      message.success(result.message)
      loadCompanies(pagination.page)
    } catch (error) {
      message.error(error.message || 'เปลี่ยนสถานะไม่สำเร็จ')
    }
  }

  const openEdit = (record) => {
    setEditingCompany(record)
    editForm.setFieldsValue({
      name: record.name,
      code: record.code,
      contactEmail: record.contactEmail,
      contactPhone: record.contactPhone,
      address: record.address,
      maxEmployees: record.maxEmployees,
      subscriptionPlan: record.subscriptionPlan || 'basic',
    })
    setEditModalOpen(true)
  }

  const columns = [
    {
      title: 'บริษัท',
      dataIndex: 'name',
      render: (name, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar size={40} style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', fontSize: 15, fontWeight: 600, flexShrink: 0 }}>
            {name?.charAt(0)?.toUpperCase()}
          </Avatar>
          <div>
            <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: 13.5 }}>{name}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>{record.code || 'No code'}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'ติดต่อ',
      dataIndex: 'contactEmail',
      render: (email, record) => (
        <div>
          <div style={{ fontSize: 12.5, color: '#cbd5e1' }}>{email || '-'}</div>
          <div style={{ fontSize: 11, color: '#64748b' }}>{record.contactPhone || ''}</div>
        </div>
      ),
    },
    {
      title: 'พนักงาน',
      dataIndex: '_count',
      align: 'center',
      width: 90,
      render: (count) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
          <TeamOutlined style={{ color: '#e5e5e5', fontSize: 13 }} />
          <span style={{ fontWeight: 600, color: '#e5e5e5', fontSize: 14 }}>{count?.employees || 0}</span>
        </div>
      ),
    },
    {
      title: 'Users',
      dataIndex: '_count',
      align: 'center',
      width: 70,
      render: (count) => <span style={{ color: '#94a3b8' }}>{count?.users || 0}</span>,
    },
    {
      title: 'Plan',
      dataIndex: 'subscriptionPlan',
      align: 'center',
      width: 100,
      render: plan => {
        const color = plan === 'premium' ? 'gold' : plan === 'standard' ? 'geekblue' : 'default'
        return <Tag color={color} style={{ borderRadius: 6, textTransform: 'capitalize', fontSize: 11 }}>{plan || 'basic'}</Tag>
      },
    },
    {
      title: 'สถานะ',
      dataIndex: 'isActive',
      align: 'center',
      width: 100,
      render: active => active
        ? <Tag icon={<CheckCircleOutlined />} color="success" style={{ borderRadius: 6 }}>Active</Tag>
        : <Tag icon={<CloseCircleOutlined />} color="error" style={{ borderRadius: 6 }}>Inactive</Tag>,
    },
    {
      title: 'สร้างเมื่อ',
      dataIndex: 'createdAt',
      width: 110,
      render: d => <span style={{ fontSize: 12, color: '#94a3b8' }}>{dayjs(d).format('DD MMM YY')}</span>,
    },
    {
      title: '',
      key: 'actions',
      width: 140,
      render: (_, record) => (
        <Space size={4}>
          <Tooltip title="ดูรายละเอียด">
            <Button type="text" size="small" icon={<EyeOutlined />}
              style={{ color: '#94a3b8' }}
              onClick={() => navigate(`/companies/${record.id}`)}
            />
          </Tooltip>
          {canEdit && (
            <Tooltip title="แก้ไข">
              <Button type="text" size="small" icon={<EditOutlined />}
                style={{ color: '#a8a8a8' }}
                onClick={() => openEdit(record)}
              />
            </Tooltip>
          )}
          {canToggle && (
            <Tooltip title={record.isActive ? 'ปิดใช้งาน' : 'เปิดใช้งาน'}>
              <Button type="text" size="small" icon={<PoweroffOutlined />}
                style={{ color: record.isActive ? '#f59e0b' : '#10b981' }}
                onClick={() => handleToggle(record.id)}
              />
            </Tooltip>
          )}
          {canDelete && (
            <Popconfirm
              title="ยืนยันลบบริษัท?"
              description="การลบจะไม่สามารถกู้คืนได้ ข้อมูลทั้งหมดจะถูกลบ"
              onConfirm={() => handleDelete(record.id)}
              okText="ลบ" cancelText="ยกเลิก"
              okButtonProps={{ danger: true }}
            >
              <Tooltip title="ลบ">
                <Button type="text" size="small" icon={<DeleteOutlined />} danger />
              </Tooltip>
            </Popconfirm>
          )}
        </Space>
      ),
    },
  ]

  const CompanyFormFields = ({ isEdit = false }) => (
    <>
      <Form.Item name="name" label="ชื่อบริษัท" rules={[{ required: true, message: 'กรุณากรอกชื่อบริษัท' }]}>
        <Input placeholder="เช่น บริษัท ทดสอบ จำกัด" />
      </Form.Item>
      <Form.Item name="code" label="รหัสบริษัท">
        <Input placeholder="เช่น TEST001" />
      </Form.Item>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Form.Item name="contactEmail" label="อีเมลติดต่อ">
          <Input placeholder="admin@company.com" />
        </Form.Item>
        <Form.Item name="contactPhone" label="เบอร์ติดต่อ">
          <Input placeholder="0xx-xxx-xxxx" />
        </Form.Item>
      </div>
      <Form.Item name="address" label="ที่อยู่">
        <Input.TextArea rows={2} placeholder="ที่อยู่บริษัท" />
      </Form.Item>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <Form.Item name="subscriptionPlan" label="แผนการใช้งาน" initialValue="basic">
          <Select options={[
            { label: 'Basic', value: 'basic' },
            { label: 'Standard', value: 'standard' },
            { label: 'Premium', value: 'premium' },
          ]} />
        </Form.Item>
        <Form.Item name="maxEmployees" label="จำนวนพนักงานสูงสุด">
          <Input type="number" placeholder="ไม่จำกัด" />
        </Form.Item>
      </div>
      {!isEdit && (
        <>
          <div style={{ padding: '12px 16px', background: 'rgba(122,122,122,0.06)', borderRadius: 10, border: '1px solid rgba(122,122,122,0.1)', marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#e5e5e5', margin: '0 0 8px' }}>👤 Admin ผู้ดูแลบริษัท (ตัวเลือก)</p>
            <p style={{ fontSize: 11, color: '#64748b', margin: 0 }}>สร้าง Admin user เริ่มต้นให้บริษัทใหม่</p>
          </div>
          <Form.Item name="adminFullName" label="ชื่อ Admin">
            <Input placeholder="ชื่อ-นามสกุล" />
          </Form.Item>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <Form.Item name="adminEmail" label="อีเมล Admin">
              <Input placeholder="admin@company.com" />
            </Form.Item>
            <Form.Item name="adminPassword" label="รหัสผ่าน Admin">
              <Input.Password placeholder="อย่างน้อย 6 ตัว" />
            </Form.Item>
          </div>
        </>
      )}
    </>
  )

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1440, margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}
      >
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>
            <BankOutlined style={{ marginRight: 10, color: '#e5e5e5' }} />
            จัดการบริษัท
          </h1>
          <p style={{ fontSize: 14, color: '#64748b', marginTop: 6 }}>
            จัดการ Tenant ที่ใช้งาน HR Platform — ทั้งหมด {pagination.total} บริษัท
          </p>
        </div>
        {canCreate && (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setCreateModalOpen(true)}
            style={{
              height: 42, borderRadius: 12, fontWeight: 600,
              background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
              border: 'none', boxShadow: '0 4px 16px rgba(59, 130, 246, 0.35)',
            }}
          >
            เพิ่มบริษัท
          </Button>
        )}
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card-static"
        style={{ padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 12, alignItems: 'center' }}
      >
        <Input
          prefix={<SearchOutlined style={{ color: '#64748b' }} />}
          placeholder="ค้นหาชื่อ, รหัส หรืออีเมล..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          allowClear
          style={{ maxWidth: 320, borderRadius: 10 }}
        />
        <Select
          placeholder="สถานะ"
          value={statusFilter || undefined}
          onChange={v => setStatusFilter(v || '')}
          allowClear
          style={{ width: 140 }}
          options={[
            { label: 'ทั้งหมด', value: '' },
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
          ]}
        />
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card-static"
        style={{ padding: 0, overflow: 'hidden' }}
      >
        <Table
          dataSource={companies}
          columns={columns}
          rowKey="id"
          loading={loading}
          pagination={{
            current: pagination.page,
            pageSize: pagination.limit,
            total: pagination.total,
            onChange: (page) => loadCompanies(page),
            showTotal: (total) => `ทั้งหมด ${total} บริษัท`,
            showSizeChanger: false,
          }}
        />
      </motion.div>

      {/* Create Modal */}
      <Modal
        title="เพิ่มบริษัทใหม่"
        open={createModalOpen}
        onCancel={() => { setCreateModalOpen(false); createForm.resetFields() }}
        footer={null}
        width={560}
        destroyOnClose
      >
        <Form form={createForm} layout="vertical" onFinish={handleCreate} style={{ marginTop: 16 }}>
          <CompanyFormFields />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
            <Button onClick={() => { setCreateModalOpen(false); createForm.resetFields() }}>ยกเลิก</Button>
            <Button type="primary" htmlType="submit" loading={submitting}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', border: 'none' }}>
              สร้างบริษัท
            </Button>
          </div>
        </Form>
      </Modal>

      {/* Edit Modal */}
      <Modal
        title={`แก้ไข: ${editingCompany?.name || ''}`}
        open={editModalOpen}
        onCancel={() => { setEditModalOpen(false); setEditingCompany(null); editForm.resetFields() }}
        footer={null}
        width={560}
        destroyOnClose
      >
        <Form form={editForm} layout="vertical" onFinish={handleEdit} style={{ marginTop: 16 }}>
          <CompanyFormFields isEdit />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
            <Button onClick={() => { setEditModalOpen(false); editForm.resetFields() }}>ยกเลิก</Button>
            <Button type="primary" htmlType="submit" loading={submitting}
              style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', border: 'none' }}>
              บันทึก
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}
