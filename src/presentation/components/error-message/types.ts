import type { ReactNode } from 'react'

type ErrorImages = 'emoji-warning' | 'emoji-sad-pensive' | 'machines'

export interface ErrorMessageProps {
  title?: string
  image?: ErrorImages
  subtitle: string | ReactNode
  onTryAgain?: () => void
}
