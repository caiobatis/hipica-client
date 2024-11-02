import { describe, expect, it } from 'vitest'
import { useToggle } from '~/infra/hooks/states/use-toggle'
import { act, renderHook } from '~/tests'

const makeSut = (initialState?: boolean) => {
  const { result } = renderHook(() => useToggle(initialState))
  return result
}

describe('useToggle', () => {
  it('should have default state false', () => {
    const { current } = makeSut()
    const [state] = current

    expect(state).toEqual(false)
  })

  it('should render with given initial state', () => {
    const { current } = makeSut(true)
    const [state] = current

    expect(state).toEqual(true)
  })

  it('should toggle state with dispatch', () => {
    const result = makeSut()
    const [initialState, toggleState] = result.current

    act(() => {
      toggleState()
    })

    const [finalState] = result.current

    expect(initialState).toEqual(false)
    expect(finalState).toEqual(true)
  })
})
