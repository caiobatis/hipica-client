import { afterEach, describe, expect, it, vi } from 'vitest'
import { useFileSelector } from '~/infra/hooks/file-selector'
import type { UseFileSelectorOptions } from '~/infra/hooks/file-selector/types'
import { act, renderHook, waitFor } from '~/tests'

const defaultOptions: UseFileSelectorOptions<'image'> = {
  type: 'image',
  extensions: ['.png', '.jpg', '.jpeg'],
}

const makeSut = (options: UseFileSelectorOptions<'image'> = defaultOptions) => {
  const { result } = renderHook(() => useFileSelector(options))
  return result
}

describe('useFileSelector', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should return selectedFile', () => {
    const { current } = makeSut()
    expect(current.selectedFile).toBeDefined()
  })

  it('should return suggestedExtensions', () => {
    const { current } = makeSut()
    expect(current.suggestedExtensions).toBeDefined()
  })

  it('should return handleSelectFile', () => {
    const { current } = makeSut()
    expect(current.handleSelectFile).toBeDefined()
  })

  it('should return handleClearFile', () => {
    const { current } = makeSut()
    expect(current.handleClearFile).toBeDefined()
  })

  describe('when handleSelectFile is called', () => {
    it('should set errorTrigger to true when file extension is not allowed', async () => {
      const result = makeSut()
      const file = new File([''], 'file.txt', { type: 'text/plain' })

      act(() => {
        result.current.handleSelectFile(file)
      })

      await waitFor(() => {
        expect(result.current.errorTrigger).toBe(true)
      })
    })
  })

  it('should call handleClearFile', () => {
    const { current } = makeSut()
    const file = new File([''], 'file.png', { type: 'image/png' })

    current.handleSelectFile(file)
    current.handleClearFile()

    expect(current.selectedFile).toEqual({
      name: '',
      type: '',
      size: 0,
      content: null,
    })
  })

  it('should return default extensions when options.extensions is not provided', () => {
    const { current } = makeSut({
      type: 'image',
    })

    const file = new File([''], 'file.png', { type: 'image/png' })
    current.handleSelectFile(file)

    expect(current.suggestedExtensions).toEqual([
      '.jpeg',
      '.jpg',
      '.png',
      '.gif',
    ])
  })

  it('should return provided extensions when options.extensions is provided', () => {
    const { current } = makeSut({
      type: 'image',
      extensions: ['.png', '.jpg', '.jpeg'],
    })

    current.suggestedExtensions.forEach((extension) => {
      expect(['.png', '.jpg', '.jpeg']).toContain(extension)
    })
  })
})
