/* eslint-disable no-console */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  sessionStorageManager,
  type SessionStorageKeys,
} from '~/infra/utils/sessionStorage'

console.error = vi.fn()

const TESTING_KEY = 'TESTING_KEY' as SessionStorageKeys

describe('sessionStorageManager', () => {
  beforeEach(() => {
    sessionStorage.clear()
  })

  it('should save and recovery one item correctly', () => {
    const testData = { key: 'value' }

    sessionStorageManager.setItem(TESTING_KEY, testData)

    const retrievedData = sessionStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.deep.equal(testData)
  })

  it('should remove one item correctly', () => {
    const testData = { key: 'value' }

    sessionStorageManager.setItem(TESTING_KEY, testData)
    sessionStorageManager.removeItem(TESTING_KEY)

    const retrievedData = sessionStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.be.null
  })

  it('should clean the SessionStorage correctly', () => {
    sessionStorageManager.setItem(TESTING_KEY, {
      key: 'value',
    })
    sessionStorageManager.clear()

    const retrievedData = sessionStorageManager.getItem(TESTING_KEY)

    expect(retrievedData).to.be.null
  })

  describe('exceptions handling', () => {
    let sessionStorageMock: Storage

    beforeEach(() => {
      sessionStorageMock = {
        removeItem: vi.fn(),
        setItem: vi.fn(),
        getItem: vi.fn(),
        clear: vi.fn(),
        key: vi.fn(),
        length: 0,
      }
      Object.defineProperty(window, 'sessionStorage', {
        value: sessionStorageMock,
        writable: true,
      })
    })

    it('should handle error on setItem', () => {
      sessionStorageMock.setItem = () => {
        throw new Error('setItem error')
      }
      sessionStorageManager.setItem(TESTING_KEY, null)

      expect(console.error).toHaveBeenCalledWith(
        `Erro ao salvar o item '${TESTING_KEY}': Error: setItem error`,
      )

      sessionStorageMock.setItem = vi.fn()
    })

    it('should handle error on getItem', () => {
      sessionStorageMock.getItem = () => {
        throw new Error('getItem error')
      }
      sessionStorageManager.getItem(TESTING_KEY)

      expect(console.error).toHaveBeenCalledWith(
        `Erro ao obter o item '${TESTING_KEY}': Error: getItem error`,
      )

      sessionStorageMock.getItem = vi.fn()
    })

    it('should handle error on removeItem', () => {
      sessionStorageMock.removeItem = () => {
        throw new Error('removeItem error')
      }
      sessionStorageManager.removeItem(TESTING_KEY)

      expect(console.error).toHaveBeenCalledWith(
        `Erro ao remover o item '${TESTING_KEY}': Error: removeItem error`,
      )

      sessionStorageMock.removeItem = vi.fn()
    })

    it('should handle error on clear', () => {
      sessionStorageMock.clear = () => {
        throw new Error('clear error')
      }
      sessionStorageManager.clear()

      expect(console.error).toHaveBeenCalledWith(
        `Erro ao limpar o SessionStorage: Error: clear error`,
      )

      sessionStorageMock.clear = vi.fn()
    })
  })
})
