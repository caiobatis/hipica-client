import { describe, expect, it, vi } from 'vitest'
import { renderHook } from '~/tests'
import { useListProducts } from './use-list-products'

vi.mock('~/app/usecases', () => {
  return {
    RemoteListProducts: class {
      public constructor() {}
      public run() {
        return {}
      }
    },
  }
})

const makeSut = () => {
  const { result } = renderHook(() =>
    useListProducts({ status: 'GOOD', orderNumber: '2341' }),
  )
  return result
}

describe('useListProducts', () => {
  it('should return a list of products', () => {
    const { current } = makeSut()
    expect(current).toEqual({})
  })
})
