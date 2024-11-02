import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useLocalState } from '~/infra/hooks/storage/use-local-state'
import type {
  StorageStateOption,
  StorageStateReturn,
} from '~/infra/hooks/storage/use-storage-state'
import { LocalStorageKeys } from '~/infra/utils/localStorage'
import type { HookInstance } from '~/tests'

const TEST_KEY = LocalStorageKeys.AUTH_STORE

const makeSut = (options: StorageStateOption<string>) => {
  const { result } = renderHook(() => useLocalState(TEST_KEY, options))

  return result
}

describe('useLocalState', () => {
  let hookInstance: HookInstance<StorageStateReturn<string>>

  beforeEach(() => {
    hookInstance = makeSut({
      defaultValue: 'Hi!',
    })
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should return data from session storage', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify('Hello!'))

    hookInstance = makeSut({})

    const [storageState] = hookInstance.current

    expect(storageState).toEqual('Hello!')
  })
})
