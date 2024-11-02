/* eslint-disable no-console */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  LocalStorageManager,
  type LocalStorageKeys,
} from '~/infra/utils/localStorage'

console.error = vi.fn()

const TESTING_KEY = 'TESTING_KEY' as LocalStorageKeys

describe('LocalStorageManager', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should save and recovery one item correctly', () => {
    const testData = { key: 'value' }

    LocalStorageManager.setItem(TESTING_KEY, testData)

    const retrievedData = LocalStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.deep.equal(testData)
  })

  it('should remove one item correctly', () => {
    const testData = { key: 'value' }

    LocalStorageManager.setItem(TESTING_KEY, testData)
    LocalStorageManager.removeItem(TESTING_KEY)

    const retrievedData = LocalStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.be.null
  })

  it('should clean the LocalStorage correctly', () => {
    LocalStorageManager.setItem(TESTING_KEY, {
      key: 'value',
    })
    LocalStorageManager.clear()

    const retrievedData = LocalStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.be.null
  })

  describe('exceptions handling', () => {
    let localStorageMock: Storage

    beforeEach(() => {
      localStorageMock = {
        removeItem: vi.fn(),
        setItem: vi.fn(),
        getItem: vi.fn(),
        clear: vi.fn(),
        key: vi.fn(),
        length: 0,
      }

      global.localStorage = localStorageMock
    })

    it('should log an error when fails to setItem', () => {
      localStorageMock.setItem = () => {
        throw new Error('Simulated error during localStorage.setItem')
      }
      LocalStorageManager.setItem(TESTING_KEY, null)

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(''))
    })

    it('should log an error when fails to getItem', () => {
      localStorageMock.getItem = () => {
        throw new Error('Simulated error during localStorage.getItem')
      }
      LocalStorageManager.getItem(TESTING_KEY)

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(''))
    })

    it('should log an error when fails to removeItem', () => {
      localStorageMock.removeItem = () => {
        throw new Error('Simulated error during localStorage.removeItem')
      }
      LocalStorageManager.removeItem(TESTING_KEY)

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(''))
    })

    it('should log an error when fails to clear', () => {
      localStorageMock.clear = () => {
        throw new Error('Simulated error during localStorage.clear')
      }
      LocalStorageManager.clear()

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(''))
    })
  })
})
