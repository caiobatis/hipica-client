import {
  useStorageState,
  type StorageStateOption,
  type StorageStateReturn,
} from '~/infra/hooks/storage/use-storage-state'
import type { SessionStorageKeys } from '~/infra/utils/sessionStorage'

export const useSessionState = <
  TValue extends object | string | boolean | number,
>(
  key: SessionStorageKeys,
  options: StorageStateOption<TValue> = {},
): StorageStateReturn<TValue> =>
  useStorageState<SessionStorageKeys, TValue>(sessionStorage, key, options)
