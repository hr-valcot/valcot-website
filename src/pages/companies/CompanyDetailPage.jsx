import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Spin, Tag, Avatar, Table, Button, Descriptions, message, Tabs, Form, InputNumber, Switch, Divider, Alert } from 'antd'
import { ArrowLeftOutlined, TeamOutlined, BankOutlined, CheckCircleOutlined, CloseCircleOutlined, SettingOutlined, CalculatorOutlined, CalendarOutlined, ClockCircleOutlined, SaveOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import * as platformService from '../../services/platformService'
import { useAuth } from '../../hooks/useAuth'
import { hasActionAccess } from '../../config/rolePermissions'
import dayjs from 'dayjs'

export default function CompanyDetailPage() {
  const { user } = useAuth()
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [company, setCompany] = useState(null)
  const [settings, setSettings] = useState(null)
  const [savingSettings, setSavingSettings] = useState(false)
  const [settingsForm] = Form.useForm()
  const canEditCompanySettings = hasActionAccess(user?.role, 'editCompany')

  useEffect(() => {
    loadDetail()
  }, [id])

  const loadDetail = async () => {
    try {
      setLoading(true)
      const data = await platformService.getCompanyDetail(id)
      setCompany(data)
      
      const settingsData = await platformService.getCompanySettings(id)
      setSettings(settingsData)
      settingsForm.setFieldsValue({
        taxRate: settingsData.taxRate || 3.0,
        ssoRate: settingsData.ssoRate || 5.0,
        defaultLeaveQuotas: settingsData.defaultLeaveQuotas || { ANNUAL: 10, SICK: 30, PERSONAL: 6, MATERNITY: 90, BEREAVEMENT: 3 },
        otSettings: settingsData.otSettings || { enabled: true, multiplier: 1.5, maxHoursPerMonth: 36 }
      })
    } catch (error) {
      console.error(error)
      message.error('ไม่พบข้อมูลบริษัท')
      navigate('/companies')
    } finally {
      setLoading(false)
    }
  }

  const handleSaveSettings = async (values) => {
    if (!canEditCompanySettings) {
      message.error('Role นี้เป็น Read-Only ไม่สามารถแก้ไขการตั้งค่าได้')
      return
    }

    try {
      setSavingSettings(true)
      await platformService.updateCompanySettings(id, values)
      message.success('บันทึกการตั้งค่าของบริษัทสำเร็จ')
    } catch (error) {
      console.error(error)
      message.error('บันทึกการตั้งค่าไม่สำเร็จ')
    } finally {
      setSavingSettings(false)
    }
  }

  if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}><Spin size="large" /></div>
  if (!company) return null

  const counts = company._count || {}
  const stats = company.stats || {}

  const overviewTab = (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        {[
          { label: 'พนักงาน', value: counts.employees || 0, icon: <TeamOutlined style={{ color: '#bfbfbf' }} />, color: '#bfbfbf' },
          { label: 'Active', value: stats.activeEmployees || 0, icon: <CheckCircleOutlined style={{ color: '#10b981' }} />, color: '#10b981' },
          { label: 'Users', value: counts.users || 0, icon: <BankOutlined style={{ color: '#06b6d4' }} />, color: '#06b6d4' },
          { label: 'แผนก', value: counts.departments || 0, icon: <BankOutlined style={{ color: '#f59e0b' }} />, color: '#f59e0b' },
        ].map((s, i) => (
          <Col xs={12} sm={6} key={i}>
            <div className="stat-card" style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#f1f5f9' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          </Col>
        ))}
      </Row>

      <div className="glass-card-static" style={{ padding: 24 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f5f9', marginBottom: 16 }}>ผู้ใช้ล่าสุด</h3>
        <Table
          dataSource={company.users || []}
          rowKey="id"
          pagination={false}
          size="small"
          columns={[
            {
              title: 'ชื่อ', dataIndex: 'fullName',
              render: (name) => <span style={{ fontWeight: 500, color: '#e2e8f0' }}>{name}</span>,
            },
            { title: 'อีเมล', dataIndex: 'email', render: v => <span style={{ color: '#94a3b8', fontSize: 12 }}>{v}</span> },
            {
              title: 'Role', dataIndex: 'role', align: 'center',
              render: r => <Tag style={{ borderRadius: 6, fontSize: 11 }} color={r === 'ADMIN' ? 'gold' : r === 'HR' ? 'blue' : 'default'}>{r}</Tag>,
            },
            {
              title: 'สร้างเมื่อ', dataIndex: 'createdAt',
              render: d => <span style={{ fontSize: 12, color: '#64748b' }}>{dayjs(d).format('DD MMM YY')}</span>,
            },
          ]}
        />
      </div>
    </>
  )

  const settingsTab = (
    <div className="glass-card-static" style={{ padding: '24px 32px' }}>
      <Form
        form={settingsForm}
        layout="vertical"
        disabled={!canEditCompanySettings}
        onFinish={handleSaveSettings}
      >
        {!canEditCompanySettings && (
          <Alert
            type="info"
            showIcon
            message="บัญชีนี้เป็น Read-Only"
            description="VALCOT_FINANCE สามารถดูข้อมูลการตั้งค่าบริษัทได้ แต่ไม่สามารถแก้ไข"
            style={{ marginBottom: 16 }}
          />
        )}

        <Row gutter={48}>
          <Col xs={24} md={12}>
            {/* Payroll Settings */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#e5e5e5', display: 'flex', alignItems: 'center', gap: 8 }}>
                <CalculatorOutlined /> Payroll & Taxes
              </h3>
              <Divider style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '12px 0 20px' }} />
              
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="taxRate" label="อัตราภาษีหัก ณ ที่จ่าย (%)" rules={[{ required: true }]}>
                    <InputNumber min={0} max={100} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="ssoRate" label="อัตราประกันสังคม (%)" rules={[{ required: true }]}>
                    <InputNumber min={0} max={100} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            {/* Leave Quotas Settings */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: 8 }}>
                <CalendarOutlined /> Leave Quotas (Days/Year)
              </h3>
              <Divider style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '12px 0 20px' }} />
              
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item name={['defaultLeaveQuotas', 'ANNUAL']} label="ลาพักร้อน">
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name={['defaultLeaveQuotas', 'SICK']} label="ลาป่วย">
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name={['defaultLeaveQuotas', 'PERSONAL']} label="ลากิจ">
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name={['defaultLeaveQuotas', 'MATERNITY']} label="ลาคลอด">
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name={['defaultLeaveQuotas', 'BEREAVEMENT']} label="ลางานศพ">
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={24} md={12}>
            {/* OT Settings */}
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: 8 }}>
                <ClockCircleOutlined /> OT Settings
              </h3>
              <Divider style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '12px 0 20px' }} />
              
              <Form.Item name={['otSettings', 'enabled']} label="เปิดใช้งาน OT ล่วงเวลา" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name={['otSettings', 'multiplier']} label="OT Multiplier (x)" rules={[{ required: true }]}>
                    <InputNumber min={1} step={0.5} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name={['otSettings', 'maxHoursPerMonth']} label="Max OT Hours/เดือน" rules={[{ required: true }]}>
                    <InputNumber min={0} style={{ width: '100%', background: 'rgba(15,10,30,0.4)', borderColor: 'rgba(255,255,255,0.1)', color: '#f1f5f9' }} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Divider style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {canEditCompanySettings && (
            <Button type="primary" htmlType="submit" loading={savingSettings}
              icon={<SaveOutlined />}
              style={{
                height: 40, padding: '0 24px', borderRadius: 10,
                background: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
                border: 'none', boxShadow: '0 4px 16px rgba(59, 130, 246, 0.35)',
              }}>
              บันทึกการตั้งค่า
            </Button>
          )}
        </div>
      </Form>
    </div>
  )

  const tabItems = [
    { key: 'overview', label: 'ภาพรวมบริษัท', children: overviewTab },
    { key: 'settings', label: <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SettingOutlined /> ตั้งค่า Payroll & HR</span>, children: settingsTab },
  ]

  return (
    <div style={{ padding: '28px 32px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <Button type="text" icon={<ArrowLeftOutlined />} onClick={() => navigate('/companies')}
          style={{ color: '#94a3b8', marginBottom: 16 }}>กลับ</Button>

        <div className="glass-card-static" style={{ padding: 28, marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
            <Avatar size={64} style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', fontSize: 26, fontWeight: 700 }}>
              {company.name?.charAt(0)?.toUpperCase()}
            </Avatar>
            <div>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{company.name}</h1>
              <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                {company.code && <Tag style={{ borderRadius: 6 }}>{company.code}</Tag>}
                <Tag color={company.subscriptionPlan === 'premium' ? 'gold' : company.subscriptionPlan === 'standard' ? 'blue' : 'default'}
                  style={{ borderRadius: 6, textTransform: 'capitalize' }}>{company.subscriptionPlan || 'basic'}</Tag>
                {company.isActive
                  ? <Tag icon={<CheckCircleOutlined />} color="success" style={{ borderRadius: 6 }}>Active</Tag>
                  : <Tag icon={<CloseCircleOutlined />} color="error" style={{ borderRadius: 6 }}>Inactive</Tag>
                }
              </div>
            </div>
          </div>

          <Descriptions column={{ xs: 1, sm: 2, lg: 3 }} size="small"
            labelStyle={{ color: '#64748b', fontSize: 12, fontWeight: 500 }}
            contentStyle={{ color: '#e2e8f0', fontSize: 13 }}>
            <Descriptions.Item label="อีเมลติดต่อ">{company.contactEmail || '-'}</Descriptions.Item>
            <Descriptions.Item label="เบอร์ติดต่อ">{company.contactPhone || '-'}</Descriptions.Item>
            <Descriptions.Item label="พนักงานสูงสุด">{company.maxEmployees || 'ไม่จำกัด'}</Descriptions.Item>
            <Descriptions.Item label="ที่อยู่">{company.address || '-'}</Descriptions.Item>
            <Descriptions.Item label="สร้างเมื่อ">{dayjs(company.createdAt).format('DD MMM YYYY HH:mm')}</Descriptions.Item>
          </Descriptions>
        </div>

        <Tabs 
          items={tabItems} 
          className="custom-tabs" 
          tabBarStyle={{ color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        />
      </motion.div>
    </div>
  )
}
