import { renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useDebounce } from './use-debounced'

vi.mock('use-debounce', () => {
  return {
    useDebouncedCallback: vi.fn(),
    useDebounce: vi.fn(),
  }
})

const makeSut = () => {
  const { result } = renderHook(() => useDebounce())
  return result
}

describe('useDebounce', () => {
  it('should return a debouncedCallback and debounce', () => {
    const { current } = makeSut()
    expect(current).toEqual(
      expect.objectContaining({
        debouncedCallback: expect.any(Function),
        debounce: expect.any(Function),
      }),
    )
  })
})
