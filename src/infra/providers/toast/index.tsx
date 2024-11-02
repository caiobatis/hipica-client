import { memo, useEffect, useRef } from 'react'
import { ToastContainer } from '~/infra/providers/toast/styles'
import { useGlobalStore } from '~/infra/store'

export const ToastProvider = memo(() => {
  const { toast, resetToast } = useGlobalStore((state) => state)

  const interval = useRef<any>()

  useEffect(() => {
    if (toast.visible) {
      interval.current = setInterval(() => {
        resetToast()

        toast.onDismiss?.()
      }, toast.delay)
    }

    return () => {
      clearInterval(interval.current)

      interval.current = null
    }
  }, [resetToast, toast])

  if (!toast.visible) return null

  return <ToastContainer>olá</ToastContainer>
})
