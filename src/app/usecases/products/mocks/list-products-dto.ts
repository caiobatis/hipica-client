/* eslint-disable camelcase */
import type { ListProducts } from '~/domain/usecases/products'

export const listProductsDTOMock: ListProducts.ResponseDTO = {
  data: [
    {
      id: '97101',
      model: 'L3',
      status: 'GOOD',
      product_image:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partner: 'CD STONE BOX',
      product: 'T3_SMART',
      customer_id: null,
      order_number: null,
      serial_number: '4AB97WH84',
      updated_at: '2022-10-17T15:28:50.000Z',
      created_at: '2022-10-17T15:28:50.000Z',
    },
    {
      id: '97077',
      model: 'L3',
      status: 'GOOD',
      product_image:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partner: 'CD STONE BOX',
      product: 'T3_SMART',
      customer_id: null,
      order_number: null,
      serial_number: '4AB97WD48',
      updated_at: '2022-10-17T15:28:50.000Z',
      created_at: '2022-10-17T15:28:50.000Z',
    },
    {
      id: '97081',
      model: 'L3',
      status: 'GOOD',
      product_image:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partner: 'CD STONE BOX',
      product: 'T3_SMART',
      customer_id: null,
      order_number: null,
      serial_number: '4AB97WF0U',
      updated_at: '2022-10-17T15:28:50.000Z',
      created_at: '2022-10-17T15:28:50.000Z',
    },
  ],
  summary: {
    by_status: [
      {
        value: 'GOOD',
        total: 1501,
      },
    ],
    by_product: [
      {
        value: 'T3',
        total: 1,
      },
      {
        value: 'T3_SMART',
        total: 15,
      },
      {
        value: 'T1',
        total: 4,
      },
    ],
  },
}
