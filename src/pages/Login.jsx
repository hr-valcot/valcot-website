import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, message } from 'antd'
import { LockOutlined, MailOutlined, CrownOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useAuth } from '../hooks/useAuth'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const { login, authError } = useAuth()
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await login(values)
      message.success('เข้าสู่ระบบสำเร็จ')
      navigate('/dashboard', { replace: true })
    } catch (error) {
      message.error(error.message || 'เข้าสู่ระบบไม่สำเร็จ')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0b0f16 0%, #141a26 30%, #0f172a 60%, #0a0a12 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122,122,122,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(191,191,191,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%', maxWidth: 440, padding: 40,
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: 24,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 48px rgba(122, 122, 122, 0.08)',
          position: 'relative', zIndex: 1,
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            style={{
              width: 64, height: 64, borderRadius: 18, margin: '0 auto 20px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
            }}
          >
            <CrownOutlined style={{ fontSize: 28, color: '#fff' }} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ fontSize: 24, fontWeight: 700, color: '#f1f5f9', margin: 0, letterSpacing: '-0.02em' }}
          >
            Valcot Admin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: 13, color: '#64748b', margin: '8px 0 0', letterSpacing: '0.02em' }}
          >
            HR Platform Management Console
          </motion.p>
        </div>

        {authError && (
          <div style={{
            padding: '10px 16px', borderRadius: 10, marginBottom: 20,
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            color: '#fca5a5', fontSize: 13,
          }}>
            {authError}
          </div>
        )}

        <Form
          name="valcot-login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'กรุณากรอกอีเมล' },
              { type: 'email', message: 'รูปแบบอีเมลไม่ถูกต้อง' },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: '#64748b' }} />}
              placeholder="อีเมล"
              style={{
                height: 48, borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#f1f5f9', fontSize: 14,
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: '#64748b' }} />}
              placeholder="รหัสผ่าน"
              style={{
                height: 48, borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#f1f5f9', fontSize: 14,
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginTop: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{
                height: 48, borderRadius: 12, fontSize: 15, fontWeight: 600,
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                border: 'none',
                boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)',
              }}
            >
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
        </Form>

        <div style={{
          textAlign: 'center', marginTop: 24,
          fontSize: 11, color: '#475569',
        }}>
          สำหรับ Valcot Platform Admin เท่านั้น
        </div>
      </motion.div>
    </div>
  )
}
