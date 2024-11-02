import Axios, { type AxiosError } from 'axios'
import type { AuthStoreLocalStorage } from '~/infra/store'
import {
  LocalStorageKeys,
  LocalStorageManager,
} from '~/infra/utils/localStorage'

const RESPONSE_STATUS_SUCCESS = new Set([200, 201, 202])
const TIMEOUT = 30000 // 30 seconds

const axios = Axios.create({
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

const getItemsLocalStorage = () => {
  const authStorage = LocalStorageManager.getItem(
    LocalStorageKeys.AUTH_STORE,
  ) as AuthStoreLocalStorage

  return authStorage
}

axios.interceptors.request.use((config) => {
  const authStorage = getItemsLocalStorage()

  if (authStorage?.state?.userAccess?.token) {
    config.headers.Authorization = `Bearer ${authStorage.state?.userAccess?.token}`
  }

  return config
})

axios.interceptors.response.use(
  (response) => {
    if (RESPONSE_STATUS_SUCCESS.has(response.status)) {
      return response
    }

    return Promise.reject(new Error(response.statusText || 'Error'))
  },
  async (error: AxiosError<{ message: string }>) => {
    switch (error.response?.status) {
      case 401: {
        const authStorage = getItemsLocalStorage()

        // without access
        if (
          error.response.data.message === 'Unauthorized' &&
          authStorage.state.refresh.token &&
          authStorage.state.userAccess.token
        ) {
          if (error?.config) {
            return axios.request({
              ...error.config,
            })
          }

          throw error
        }

        LocalStorageManager.removeItem(LocalStorageKeys.AUTH_STORE)

        throw error
      }

      default: {
        throw error
      }
    }
  },
)

export { axios }
