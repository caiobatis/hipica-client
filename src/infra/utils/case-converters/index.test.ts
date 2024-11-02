import { describe, expect, it } from 'vitest'
import { snakeToTitleCase } from '~/infra/utils/case-converters'

describe('utils/case-converters', () => {
  describe('snakeToTitleCase', () => {
    it('should return an empty string if text is nullish', () => {
      expect(snakeToTitleCase('')).toBe('')
      expect(snakeToTitleCase(null)).toBe('')
    })

    it('should convert to title case', () => {
      const titleCaseText = snakeToTitleCase('IM_A_SNAKE__CASE_TEXT')

      expect(titleCaseText).toBe('Im A Snake Case Text')
    })
  })
})
