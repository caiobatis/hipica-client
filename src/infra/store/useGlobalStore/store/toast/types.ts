import type { ReactNode } from 'react'

export interface ToastSlice {
  toast: {
    visible: boolean
    text: string
    delay?: number
    icon?: ReactNode
    action?: {
      label: string
      onClick?: () => void
    }
    onDismiss?: () => void
  }
  setToast: (args: ToastSlice['toast']) => void
  resetToast: () => void
}
