/* eslint-disable no-console */
import type { LocalStorageKeys } from '~/infra/utils/localStorage/keys'

export const LocalStorageManager = {
  setItem: (key: LocalStorageKeys, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Erro ao salvar o item '${key}': ${error as any}`)
    }
  },
  getItem: (key: LocalStorageKeys) => {
    try {
      const item = localStorage.getItem(key)

      if (item !== null) {
        return JSON.parse(item)
      }
      return null
    } catch (error) {
      console.error(`Erro ao obter o item '${key}': ${error as any}`)
      return null
    }
  },
  removeItem: (key: LocalStorageKeys) => {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Erro ao remover o item '${key}': ${error as any}`)
    }
  },
  clear: () => {
    try {
      localStorage.clear()
    } catch (error) {
      console.error(`Erro ao limpar o LocalStorage: ${error as any}`)
    }
  },
}

export * from './keys'
