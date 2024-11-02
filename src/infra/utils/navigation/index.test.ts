import { describe, expect, test } from 'vitest'
import { getRoute } from '.'

describe('utils/navigation', () => {
  test('should interpolate path parameters', () => {
    const result = getRoute('foods/:category/:name/details', {
      category: 'fruits',
      name: 'orange',
    })

    expect(result).toEqual('foods/fruits/orange/details')
  })

  test('should interpolate path parameters and search params', () => {
    const result = getRoute(
      'foods/:category/:name/details',
      { category: 'fruits', name: 'orange' },
      { origin: 'mobile', font: 'arial' },
    )

    expect(result).toEqual(
      'foods/fruits/orange/details?origin=mobile&font=arial',
    )
  })

  test('should interpolate empty when parameters is undefined', () => {
    const result = getRoute('foods/:category/:name', {
      category: 'fruits',
    })

    expect(result).toEqual('foods/fruits/')
  })
})
