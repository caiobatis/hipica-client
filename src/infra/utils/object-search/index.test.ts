import { describe, expect, it } from 'vitest'
import { objectSearch } from '~/infra/utils/object-search'

const testData = [
  { keyA: 'valueA', keyB: 'valueB' },
  { keyA: 'valueB', keyB: 'valueA' },
]

describe('utils/object-search', () => {
  it('should return objects with match in any key', () => {
    const objects = objectSearch(testData, ['keyA', 'keyB'], 'valueA')

    expect(objects).toEqual([
      { keyA: 'valueA', keyB: 'valueB' },
      { keyA: 'valueB', keyB: 'valueA' },
    ])
  })

  it('should filter objects with no matches', () => {
    const objects = objectSearch(testData, ['keyA'], 'valueA')

    expect(objects).toEqual([{ keyA: 'valueA', keyB: 'valueB' }])
  })

  it('should be case insensitive', () => {
    const objects = objectSearch(testData, ['keyA'], 'valuea')

    expect(objects).toEqual([{ keyA: 'valueA', keyB: 'valueB' }])
  })

  it('should search partially', () => {
    const objects = objectSearch(testData, ['keyA'], 'value')

    expect(objects).toEqual([
      { keyA: 'valueA', keyB: 'valueB' },
      { keyA: 'valueB', keyB: 'valueA' },
    ])
  })

  it('should search exactly with "exactly" is set', () => {
    const objects = objectSearch(testData, ['keyA'], 'valueA', true)

    expect(objects).toEqual([{ keyA: 'valueA', keyB: 'valueB' }])
  })

  it('should ignore items if key is not present', () => {
    const objects = objectSearch(
      [
        { keyA: 'valueA', keyB: 'valueB' },
        { keyA: 'valueB', keyB: 'valueA' },
        { keyB: 'valueA' },
      ],
      ['keyA'],
      'valueA',
    )

    expect(objects).toEqual([{ keyA: 'valueA', keyB: 'valueB' }])
  })
})
