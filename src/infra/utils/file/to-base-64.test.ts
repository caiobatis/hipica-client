import { describe, expect, test } from 'vitest'
import { fileToBase64 } from '~/infra/utils/file/to-base-64'

describe('utils/file-to-base-64', () => {
  test('should return a base64 string from a file', async () => {
    const file = new File(['abc'], 'file.png', { type: 'image/png' })
    const base64String = await fileToBase64(file)

    expect(base64String).toBe('data:image/png;base64,YWJj')
  })

  test('should return a base64 string from a empty file', async () => {
    const file = new File([], 'file.pdf', { type: 'application/pdf' })
    const base64String = await fileToBase64(file)

    expect(base64String).toBe('data:application/pdf;base64,')
  })
})
