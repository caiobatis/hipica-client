import type { ModalSlice } from '~/infra/store/useGlobalStore/store/modal'
import type { ToastSlice } from '~/infra/store/useGlobalStore/store/toast'

export interface AllSlices extends Partial<ModalSlice>, Partial<ToastSlice> {
  reset: () => void
}

export type GlobalStore = AllSlices & ModalSlice & ToastSlice
