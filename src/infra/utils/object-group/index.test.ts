import { describe, expect, it } from 'vitest'
import { objectGroup } from '~/infra/utils/object-group'

const testData = [
  { keyA: 'valueA', keyB: 'valueB' },
  { keyA: 'valueA', keyB: 'valueC' },
  { keyA: 'valueB', keyB: 'valueA' },
  { keyA: 'valueC', keyB: 'valueA' },
]

describe('utils/object-group', () => {
  it('should groups with labels', () => {
    const groups = objectGroup(testData, 'keyA')

    const groupKeys = groups.map((g) => g.label)

    expect(groupKeys).toEqual(['valueA', 'valueB', 'valueC'])
  })

  it('should group object by key', () => {
    const groups = objectGroup(testData, 'keyA')

    const groupA = groups.find((g) => g.label === 'valueA')

    expect(groupA).toEqual({
      label: 'valueA',
      data: [
        { keyA: 'valueA', keyB: 'valueB' },
        { keyA: 'valueA', keyB: 'valueC' },
      ],
    })
  })
})
