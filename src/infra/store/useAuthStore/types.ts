export interface AuthState {
  userAccess: {
    token: string
  }
  refresh: {
    token: string
  }
  session: {
    id: string
  }
  user: {
    id: string
  }
  isLoading: boolean
  setIsLoading: (args: boolean) => void
  setUserAccessToken: (args: string) => void
  setRefreshToken: (args: string) => void
  setSession: (args: string) => void
  setUser: (args: string) => void
}

export interface AuthStoreLocalStorage {
  state: {
    userAccess: AuthState['userAccess']
    refresh: AuthState['refresh']
    session: AuthState['session']
  }
  version: 0
}

export interface AllAuthSlices extends Partial<AuthState> {
  reset: () => void
}

export type AuthStore = AuthState & AllAuthSlices
