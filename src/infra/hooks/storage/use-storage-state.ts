import { useCallback, useEffect, useState, type Dispatch } from 'react'

export type StorageStateReturn<TValue> = [TValue, Dispatch<TValue>]

export type StorageStateOption<TValue> = {
  /**
   * The value that will be used if the store returns null
   * @default null
   */
  defaultValue?: TValue | null
  /**
   * Determines if the storage value will be watched
   * @default false
   */
  watch?: boolean
}

export const useStorageState = <
  TKey extends string,
  TValue extends object | string | boolean | number,
>(
  storage: Storage,
  key: TKey,
  options: StorageStateOption<TValue> = {},
): StorageStateReturn<TValue> => {
  const [state, setState] = useState<TValue>(() => {
    const storageValue = storage.getItem(key)

    const { defaultValue = null } = options

    return storageValue ? JSON.parse(storageValue) : defaultValue
  })

  const updateStorageValue = useCallback(
    (value: TValue) => {
      // Stringify the value
      const stringValue = JSON.stringify(value)
      const oldValue = storage.getItem(key)

      // Store it in local storage
      storage.setItem(key, stringValue)

      // Update state
      setState(value)

      // Dispatch the event to trigger every listener
      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          oldValue,
          newValue: stringValue,
        }),
      )
    },
    [key, storage],
  )

  useEffect(() => {
    const { watch: isWatchingStorage = false } = options

    if (!isWatchingStorage) return

    const listener = (event: StorageEvent) => {
      // Ignore event if key is not the observe target
      if (event.key !== key) return

      // Update React state
      setState(event.newValue && JSON.parse(event.newValue))
    }

    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key, options])

  return [state, updateStorageValue]
}
