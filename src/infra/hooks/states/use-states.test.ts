import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useStates } from '~/infra/hooks/states/use-states'

enum States {
  default = 'default',
  error = 'error',
  loading = 'loading',
}

const makeSut = (conditions: Partial<Record<States, Array<boolean>>>) => {
  const { result } = renderHook(() =>
    useStates<States>(States.default, conditions),
  )

  return result.current
}

describe('useStates', () => {
  it('should return default state by default', () => {
    const [result] = makeSut({
      default: [false, false],
      error: [false, false],
      loading: [false, false],
    })

    expect(result).toEqual(States.default)
  })

  it('should return default state', () => {
    const [result] = makeSut({
      default: [true, false],
      error: [false, false],
      loading: [false, false],
    })

    expect(result).toEqual(States.default)
  })

  it('should return error state', () => {
    const [result] = makeSut({
      default: [true, false],
      error: [false, true],
      loading: [false, false],
    })

    expect(result).toEqual(States.error)
  })

  it('should return loading state', () => {
    const [result] = makeSut({
      default: [true, false],
      error: [false, true],
      loading: [true, false],
    })

    expect(result).toEqual(States.loading)
  })
})
