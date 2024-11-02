import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useSessionState } from '~/infra/hooks/storage/use-session-state'
import type {
  StorageStateOption,
  StorageStateReturn,
} from '~/infra/hooks/storage/use-storage-state'
import { SessionStorageKeys } from '~/infra/utils/sessionStorage'
import type { HookInstance } from '~/tests'

const TEST_KEY = SessionStorageKeys.TRANSFER_SUCCESS

const makeSut = (options: StorageStateOption<string>) => {
  const { result } = renderHook(() => useSessionState(TEST_KEY, options))

  return result
}

describe('useSessionState', () => {
  let hookInstance: HookInstance<StorageStateReturn<string>>

  beforeEach(() => {
    hookInstance = makeSut({
      defaultValue: 'Hi!',
    })
  })

  afterEach(() => {
    sessionStorage.clear()
  })

  it('should return data from session storage', () => {
    sessionStorage.setItem(TEST_KEY, JSON.stringify('Hello!'))

    hookInstance = makeSut({})

    const [storageState] = hookInstance.current

    expect(storageState).toEqual('Hello!')
  })
})
