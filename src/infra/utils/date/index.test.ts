import { describe, expect, test } from 'vitest'
import { formatDateString, getRelativeDateString } from '~/infra/utils/date'

describe('utils/date', () => {
  test('should format date as string', () => {
    const formatted = formatDateString('2020-01-01T00:00:00', 'DD/MM/YYYY')

    expect(formatted).toBe('01/01/2020')
  })

  test('should return relative date', () => {
    const today = getRelativeDateString(
      '2020-01-01T00:00:00',
      '2020-01-01T01:00:00',
    )
    expect(today).toBe('Hoje')

    const yesterday = getRelativeDateString(
      '2020-01-01T00:00:00',
      '2020-01-02T00:00:00',
    )
    expect(yesterday).toBe('Ontem')

    const lessThanAWeek = getRelativeDateString(
      '2020-01-01T00:00:00',
      '2020-01-03T00:00:00',
    )
    expect(lessThanAWeek).toBe('Quarta-feira')

    const other = getRelativeDateString(
      '2020-01-01T00:00:00',
      '2020-01-30T00:00:00',
    )
    expect(other).toBe('01 de janeiro')
  })
})
