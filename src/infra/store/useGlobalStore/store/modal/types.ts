import type { ReactElement } from 'react'

export interface ModalSlice {
  modal?: ModalItem
  showModal: (modal: ModalItem) => void
  hideModal: () => void
}

export interface ModalItem {
  id: string
  content: ReactElement
}
