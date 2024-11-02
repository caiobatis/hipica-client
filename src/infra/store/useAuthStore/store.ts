import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {
  AllAuthSlices,
  AuthState,
  AuthStore,
} from '~/infra/store/useAuthStore'
import { LocalStorageKeys } from '~/infra/utils/localStorage'

const initialState = {
  userAccess: {
    token: '',
  },
  refresh: {
    token: '',
  },
  session: {
    id: '',
  },
  user: {
    id: '',
  },
  isLoading: false,
}

const authSlice: StateCreator<AuthState, [], [], AuthState> = (set) => ({
  ...initialState,
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading })
  },
  setUserAccessToken: (token: string) => {
    set({ userAccess: { token } })
  },
  setRefreshToken: (token: string) => {
    set({ refresh: { token } })
  },
  setSession: (id: string) => {
    set({ session: { id } })
  },
  setUser: (id: string) => {
    set({ user: { id } })
  },
})

const resetSlices: StateCreator<AllAuthSlices, [], [], AllAuthSlices> = (
  set,
) => ({
  ...initialState,
  reset: () => {
    set({ ...initialState })
  },
})

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (...a) => ({
        ...authSlice(...a),
        ...resetSlices(...a),
      }),
      { name: LocalStorageKeys.AUTH_STORE },
    ),
  ),
)
