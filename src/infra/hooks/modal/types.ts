import type { ReactElement } from 'react'

export interface UseModalReturn {
  show: (render: ModalRender) => void
  hide: () => void
}

export interface ModalRenderInfo {
  id: string
  toggleModal: VoidFunction
}

export interface ModalRender {
  (info: ModalRenderInfo): ReactElement
}
