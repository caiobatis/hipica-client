import {
  useStorageState,
  type StorageStateOption,
  type StorageStateReturn,
} from '~/infra/hooks/storage/use-storage-state'
import type { LocalStorageKeys } from '~/infra/utils/localStorage'

export const useLocalState = <
  TValue extends object | string | boolean | number,
>(
  key: LocalStorageKeys,
  options: StorageStateOption<TValue> = {},
): StorageStateReturn<TValue> =>
  useStorageState<LocalStorageKeys, TValue>(localStorage, key, options)
