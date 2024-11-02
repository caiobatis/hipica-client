import type { StateCreator } from 'zustand'
import type { ModalSlice } from '~/infra/store/useGlobalStore/store/modal'

export const initialState = {
  modal: undefined,
}

export const modalSlice: StateCreator<ModalSlice, [], [], ModalSlice> = (
  set,
) => ({
  ...initialState,
  showModal: ({ id, content }) => {
    set({
      modal: {
        id,
        content,
      },
    })
  },
  hideModal: () => {
    set({ modal: initialState.modal })
  },
})
