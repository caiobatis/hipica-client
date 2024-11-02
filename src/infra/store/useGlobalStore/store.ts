import { create, type StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { AllSlices, GlobalStore } from '~/infra/store'
import {
  initialState as modalInitialState,
  modalSlice,
} from '~/infra/store/useGlobalStore/store/modal'
import {
  initialState as toastInitialState,
  toastSlice,
} from '~/infra/store/useGlobalStore/store/toast'

const initialState = {
  ...modalInitialState,
  ...toastInitialState,
}

const resetSlices: StateCreator<AllSlices, [], [], AllSlices> = (set) => ({
  ...initialState,
  reset: () => {
    set({ ...initialState })
  },
})

export const useGlobalStore = create<GlobalStore>()(
  devtools(
    (...a) => ({
      ...toastSlice(...a),
      ...modalSlice(...a),
      ...resetSlices(...a),
    }),
    { name: 'globalStore' },
  ),
)
