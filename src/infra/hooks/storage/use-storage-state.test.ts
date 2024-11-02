import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import {
  useStorageState,
  type StorageStateOption,
  type StorageStateReturn,
} from '~/infra/hooks/storage/use-storage-state'
import type { HookInstance } from '~/tests'

const TEST_KEY = 'localKey'

const makeSut = (options: StorageStateOption<string>, key = TEST_KEY) => {
  const { result } = renderHook(() =>
    useStorageState(localStorage, key, options),
  )

  return result
}

describe('useStorageState', () => {
  let hookInstance: HookInstance<StorageStateReturn<string>>

  beforeEach(() => {
    hookInstance = makeSut({
      defaultValue: 'Hi!',
    })
  })

  afterEach(() => {
    localStorage.clear()
  })

  it('should return default value by default', () => {
    const [storageState] = hookInstance.current

    expect(storageState).toEqual('Hi!')
  })

  it('should return storage value by default if it exists', () => {
    localStorage.setItem(TEST_KEY, JSON.stringify('Hello!'))

    hookInstance = makeSut({
      defaultValue: 'Hi!',
    })

    const [storageState] = hookInstance.current

    expect(storageState).toEqual('Hello!')
  })

  describe('when dispatch is triggered', () => {
    beforeEach(() => {
      const [, dispatch] = hookInstance.current

      act(() => {
        dispatch('Hello!')
      })
    })

    it('should update state', () => {
      const [newValue] = hookInstance.current

      expect(newValue).toEqual('Hello!')
    })

    it('should update storage', () => {
      const localValue = localStorage.getItem(TEST_KEY)

      expect(localValue).toEqual(JSON.stringify('Hello!'))
    })
  })

  it('should share state updates when watch is active', () => {
    const hookInstanceA = makeSut({
      defaultValue: 'Hello!',
      watch: true,
    })

    const hookInstanceB = makeSut({
      defaultValue: 'Hi!',
      watch: true,
    })

    const [, dispatch] = hookInstanceA.current

    act(() => {
      dispatch('Updated!')
    })

    const [valueA] = hookInstanceA.current
    const [valueB] = hookInstanceB.current

    expect(valueA).toEqual('Updated!')
    expect(valueB).toEqual('Updated!')
  })

  it('should not update state when watch is inactive', () => {
    const hookInstanceA = makeSut({
      defaultValue: 'Hello!',
      watch: true,
    })

    const hookInstanceB = makeSut({
      defaultValue: 'Hi!',
    })

    const [, dispatch] = hookInstanceA.current

    act(() => {
      dispatch('Updated!')
    })

    const [valueA] = hookInstanceA.current
    const [valueB] = hookInstanceB.current

    expect(valueA).toEqual('Updated!')
    expect(valueB).toEqual('Hi!')
  })

  it('should not update state when update a different key', () => {
    const hookInstanceA = makeSut({ watch: true })

    const hookInstanceB = makeSut({ watch: true }, 'diffKey')

    const [, dispatch] = hookInstanceA.current

    act(() => {
      dispatch('Updated!')
    })

    const [valueB] = hookInstanceB.current

    expect(valueB).toEqual(null)
  })
})
