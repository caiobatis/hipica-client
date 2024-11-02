import { describe, expect, test, vi } from 'vitest'
import { generateImagePreview } from '~/infra/utils/image'

describe('utils/image', () => {
  test('should generate a url from a image', () => {
    // This is needed because the function uses
    // the URL.createObjectURL, which is
    // not available in the test environment
    window.URL.createObjectURL = vi.fn().mockReturnValue('url')

    const file = new File([], 'image.png')
    const fileUrl = generateImagePreview(file)

    expect(fileUrl).toEqual('url')
  })
})
