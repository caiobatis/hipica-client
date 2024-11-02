import type { StateCreator } from 'zustand'
import type { ToastSlice } from '~/infra/store/useGlobalStore/store/toast'

export const initialState = {
  toast: {
    visible: false,
    text: '',
    delay: 3000,
    icon: undefined,
    action: {
      label: '',
    },
  },
}

export const toastSlice: StateCreator<ToastSlice, [], [], ToastSlice> = (
  set,
) => ({
  ...initialState,
  setToast: (toast) => {
    set({ toast })
  },
  resetToast: () => {
    set({ toast: initialState.toast })
  },
})
