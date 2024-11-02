import { describe, expect, test } from 'vitest'
import { classNames } from '~/infra/utils/class-names'

describe('utils/class-names', () => {
  test('should aggregate string', () => {
    const classes = classNames('foo', 'bar')

    expect(classes).toBe('foo bar')
  })

  test('should not aggregate falsy values', () => {
    const classes = classNames('foo', null, false, undefined, 'bar')

    expect(classes).toBe('foo bar')
  })

  test('should aggregate object keys if value is truthy', () => {
    const classes = classNames(
      'foo',
      { lorem: true },
      { ipsum: true, dolor: false, sit: null },
      'bar',
    )

    expect(classes).toBe('foo lorem ipsum bar')
  })
})
