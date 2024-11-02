import type { ListProducts } from '~/domain/usecases/products'

export const listProductsMock: ListProducts.Response = {
  data: [
    {
      id: '97101',
      model: 'L3',
      status: 'GOOD',
      imageUrl:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partnerName: 'CD STONE BOX',
      productName: 'T3_SMART',
      displayName: 'T3 Smart',
      customerId: null,
      orderNumber: null,
      serialNumber: '4AB97WH84',
      updatedAt: '2022-10-17T15:28:50.000Z',
      createdAt: '2022-10-17T15:28:50.000Z',
    },
    {
      id: '97077',
      model: 'L3',
      status: 'GOOD',
      imageUrl:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partnerName: 'CD STONE BOX',
      productName: 'T3_SMART',
      displayName: 'T3 Smart',
      customerId: null,
      orderNumber: null,
      serialNumber: '4AB97WD48',
      updatedAt: '2022-10-17T15:28:50.000Z',
      createdAt: '2022-10-17T15:28:50.000Z',
    },
    {
      id: '97081',
      model: 'L3',
      status: 'GOOD',
      imageUrl:
        'https://assets.sdx.ton.com.br/images/mgm-consigned/shared/products/T3.png',
      partnerName: 'CD STONE BOX',
      productName: 'T3_SMART',
      displayName: 'T3 Smart',
      customerId: null,
      orderNumber: null,
      serialNumber: '4AB97WF0U',
      updatedAt: '2022-10-17T15:28:50.000Z',
      createdAt: '2022-10-17T15:28:50.000Z',
    },
  ],
  summary: {
    byStatus: [
      {
        value: 'GOOD',
        total: 1501,
      },
    ],
    byProduct: [
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
