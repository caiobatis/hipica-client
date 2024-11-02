import { describe, expect, test } from 'vitest'
import { pluralize, type PluralizeParameters } from '~/infra/utils/pluralize'

describe('utils/pluralize', () => {
  const parameters: PluralizeParameters = {
    plural: 'dinossauros',
    singular: 'dinossauro',
    zero: 'nenhum dinossauro',
  }

  test('when value is zero', (): void => {
    const text = pluralize(0, parameters)

    expect(text).toBe('nenhum dinossauro')
  })

  test('when value is singular', (): void => {
    const text = pluralize(1, parameters)

    expect(text).toBe('1 dinossauro')
  })

  test('when value is plural', (): void => {
    const text = pluralize(2, parameters)

    expect(text).toBe('2 dinossauros')
  })
})
