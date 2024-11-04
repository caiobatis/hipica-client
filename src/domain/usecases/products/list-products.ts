import type { ProductDTO } from '~/infra/api/dtos/product'

export namespace ListProducts {
  export type ParametersDTO = {
    status?: 'GOOD' | 'PERDA ATIVA' | 'EM PRODUÇÃO' | 'BAD'
    order_number?: string
  }

  export type Parameters = {
    status?: 'GOOD' | 'PERDA ATIVA' | 'EM PRODUÇÃO' | 'BAD'
    enabled?: boolean
    orderNumber?: string
    colection: string
  }

  export type ResponseDTO = Array<ProductDTO>

  export type Response = Array<ProductDTO>

  export enum keys {
    LIST_PRODUCTS = 'LIST_PRODUCTS',
  }
}
