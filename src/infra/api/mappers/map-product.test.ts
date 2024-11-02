/* eslint-disable camelcase */
import { describe, expect, it } from 'vitest'
import { mapProductDTO } from '~/infra/api/mappers'

describe('api/mappers/map-products', (): void => {
  it('should map ProductDTO to products', () => {
    const products = mapProductDTO({
      id: '3',
      model: 'S290',
      customer_id: '1234567',
      order_number: '123456',
      partner: 'Partner Name',
      product: 'T3',
      serial_number: '123456',
      status: 'GOOD',
      product_image: 'imageUrl',
      updated_at: '2020-01-01T00:00:00',
      created_at: '2020-01-01T00:00:00',
    })

    expect(products).toStrictEqual({
      id: '3',
      model: 'S290',
      customerId: '1234567',
      orderNumber: '123456',
      partnerName: 'Partner Name',
      productName: 'T3',
      displayName: 'T3',
      serialNumber: '123456',
      status: 'GOOD',
      imageUrl: 'imageUrl',
      updatedAt: '2020-01-01T00:00:00',
      createdAt: '2020-01-01T00:00:00',
    })
  })
})
