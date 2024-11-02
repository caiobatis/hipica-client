/* eslint-disable no-console */
import type { SessionStorageKeys } from '~/infra/utils/sessionStorage/keys'

export const sessionStorageManager = {
  setItem: (key: SessionStorageKeys, value: unknown) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Erro ao salvar o item '${key}': ${error as any}`)
    }
  },
  getItem: (key: SessionStorageKeys) => {
    try {
      const item = sessionStorage.getItem(key)

      if (item !== null) {
        return JSON.parse(item)
      }
      return null
    } catch (error) {
      console.error(`Erro ao obter o item '${key}': ${error as any}`)
      return null
    }
  },
  removeItem: (key: SessionStorageKeys) => {
    try {
      sessionStorage.removeItem(key)
    } catch (error) {
      console.error(`Erro ao remover o item '${key}': ${error as any}`)
    }
  },
  clear: () => {
    try {
      sessionStorage.clear()
    } catch (error) {
      console.error(`Erro ao limpar o SessionStorage: ${error as any}`)
    }
  },
}

export * from './keys'
