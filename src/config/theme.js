/**
 * Ant Design Theme Configuration
 * Valcot Admin - Premium Monochrome Dark Theme
 */

export const themeConfig = {
  token: {
    // Primary - Blue
    colorPrimary: '#3b82f6',
    colorPrimaryBg: 'rgba(59, 130, 246, 0.08)',
    colorPrimaryBgHover: 'rgba(59, 130, 246, 0.12)',
    colorPrimaryBorder: 'rgba(59, 130, 246, 0.3)',
    colorPrimaryBorderHover: '#60a5fa',
    colorPrimaryHover: '#60a5fa',
    colorPrimaryActive: '#2563eb',
    colorPrimaryTextHover: '#60a5fa',
    colorPrimaryText: '#3b82f6',
    colorPrimaryTextActive: '#2563eb',

    // Success
    colorSuccess: '#10b981',
    colorSuccessBg: 'rgba(16, 185, 129, 0.1)',
    colorSuccessBorder: 'rgba(16, 185, 129, 0.2)',

    // Warning
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.1)',
    colorWarningBorder: 'rgba(245, 158, 11, 0.2)',

    // Error
    colorError: '#ef4444',
    colorErrorBg: 'rgba(239, 68, 68, 0.1)',
    colorErrorBorder: 'rgba(239, 68, 68, 0.2)',

    // Info
    colorInfo: '#3b82f6',
    colorInfoBg: 'rgba(59, 130, 246, 0.1)',
    colorInfoBorder: 'rgba(59, 130, 246, 0.2)',

    // Dark backgrounds
    colorBgContainer: '#111827',
    colorBgElevated: '#1e293b',
    colorBgLayout: '#0a0a12',
    colorBgSpotlight: '#1e293b',
    colorBorder: 'rgba(255, 255, 255, 0.08)',
    colorBorderSecondary: 'rgba(255, 255, 255, 0.04)',

    // Text
    colorText: '#f1f5f9',
    colorTextSecondary: '#94a3b8',
    colorTextTertiary: '#64748b',
    colorTextQuaternary: '#475569',

    // Typography
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: 14,
    fontSizeHeading1: 36,
    fontSizeHeading2: 28,
    fontSizeHeading3: 22,
    fontSizeHeading4: 18,
    fontSizeHeading5: 15,

    // Border Radius
    borderRadius: 10,
    borderRadiusLG: 14,
    borderRadiusSM: 8,
    borderRadiusXS: 4,

    // Control Heights
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,

    // Shadows
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    boxShadowSecondary: '0 4px 16px rgba(0, 0, 0, 0.4)',

    // Motion
    motionDurationFast: '0.15s',
    motionDurationMid: '0.25s',
    motionDurationSlow: '0.35s',
  },
  components: {
    Button: {
      borderRadius: 10,
      controlHeight: 40,
      fontWeight: 500,
      primaryShadow: '0 2px 8px rgba(59, 130, 246, 0.35)',
    },
    Input: {
      borderRadius: 10,
      controlHeight: 40,
      activeBorderColor: '#3b82f6',
      hoverBorderColor: 'rgba(59, 130, 246, 0.4)',
      activeShadow: '0 0 0 3px rgba(59, 130, 246, 0.12)',
    },
    Select: {
      borderRadius: 10,
      controlHeight: 40,
      optionSelectedBg: 'rgba(59, 130, 246, 0.15)',
      optionActiveBg: 'rgba(255, 255, 255, 0.05)',
    },
    Table: {
      borderRadius: 14,
      headerBg: 'rgba(255, 255, 255, 0.03)',
      headerColor: '#94a3b8',
      headerSplitColor: 'rgba(255, 255, 255, 0.06)',
      rowHoverBg: 'rgba(59, 130, 246, 0.04)',
      cellPaddingBlock: 14,
      cellPaddingInline: 16,
    },
    Card: {
      borderRadiusLG: 16,
      paddingLG: 24,
    },
    Modal: {
      borderRadiusLG: 16,
      titleFontSize: 18,
      contentBg: '#111827',
      headerBg: '#111827',
    },
    Menu: {
      itemBorderRadius: 10,
      itemHeight: 42,
      itemMarginBlock: 2,
      itemMarginInline: 12,
    },
    Tag: {
      borderRadiusSM: 6,
    },
    Statistic: {
      titleFontSize: 13,
      contentFontSize: 28,
    },
    Tooltip: {
      borderRadius: 8,
    },
  },
}

export default themeConfig
