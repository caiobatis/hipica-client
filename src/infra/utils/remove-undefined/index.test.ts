import { describe, expect, test } from 'vitest'
import { removeUndefined } from '~/infra/utils/remove-undefined'

describe('utils/remove-undefined', () => {
  const object: object = {
    keep1: 'hello',
    noKeep1: '',
    noKeep2: null,
    noKeep3: false,
    noKeep4: undefined,
  }

  test('should remove undefined values', (): void => {
    const noUndefined = removeUndefined(object)

    expect(noUndefined).toEqual({
      keep1: 'hello',
    })
  })
})
