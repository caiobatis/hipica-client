import type React from 'react'
import { useGlobalStore } from '~/infra/store'

export const ModalProvider: React.FC = () => {
  const { modal } = useGlobalStore((state) => state)

  return modal?.content
}
