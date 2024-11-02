import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { useImageResizer } from '~/infra/hooks/image-resizer'
import type { ImageResizerOptions } from '~/infra/hooks/image-resizer/types'
import { act, renderHook, waitFor } from '~/tests'

const defaultOptions: ImageResizerOptions = {
  id: '1',
  quality: 'LOW',
  file: new File([''], 'file.png', { type: 'image/png' }),
  height: undefined,
  width: undefined,
}

const mockResize = vi.fn()
const mockToBlob = vi.fn()

vi.mock('pica', () => {
  return {
    __esModule: true,
    default: () => ({
      resize: mockResize,
      toBlob: mockToBlob,
    }),
  }
})

const makeSut = () => {
  const { result } = renderHook(() => useImageResizer())
  return result
}

describe('useImageResizer', () => {
  beforeAll(() => {
    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost')
    HTMLImageElement.prototype.decode = vi.fn(() => Promise.resolve())
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should initialize with default states', () => {
    const { current } = makeSut()

    expect(current.isLoading).toEqual({})
    expect(current.isError).toEqual({})
    expect(current.resizedImages).toEqual({})
    expect(current.onResize).toBeDefined()
  })

  it('should handle file resize', async () => {
    const result = makeSut()

    await act(async () => {
      await result.current.onResize(defaultOptions)
    })

    await waitFor(() => {
      expect(result.current.isLoading).toEqual({ '1': false })
      expect(result.current.isError).toEqual({ '1': false })
      expect(result.current.resizedImages).not.toBeNull()
    })
  })

  it('should handle errors during resizing', async () => {
    const result = makeSut()

    mockResize.mockImplementation(() =>
      Promise.reject(new Error('Error resizing image')),
    )
    mockToBlob.mockImplementation(() =>
      Promise.reject(new Error('Error converting canvas to blob')),
    )
    await act(async () => {
      await result.current.onResize(defaultOptions)
    })

    await waitFor(() => {
      expect(result.current.isLoading).toEqual({ '1': false })
      expect(result.current.isError).toEqual({ '1': true })
      expect(result.current.resizedImages).toEqual({})
    })
  })

  it('should handle file resize with width and height', async () => {
    const result = makeSut()

    mockResize.mockImplementation(() => Promise.resolve())
    mockToBlob.mockImplementation(() => Promise.resolve())

    await act(async () => {
      await result.current.onResize({
        ...defaultOptions,
        width: 100,
        height: 100,
      })
    })

    await waitFor(() => {
      expect(result.current.isLoading).toEqual({ '1': false })
      expect(result.current.isError).toEqual({ '1': false })
      expect(result.current.resizedImages).not.toBeNull()
    })
  })
})
