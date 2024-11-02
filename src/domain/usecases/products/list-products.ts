import type { Product, SummarizedItem } from '~/domain/entities'
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
  }

  export type ResponseDTO = SummarizedItem<
    ProductDTO,
    'by_status' | 'by_product'
  >

  export type Response = SummarizedItem<Product, 'byStatus' | 'byProduct'>

  export enum keys {
    LIST_PRODUCTS = 'LIST_PRODUCTS',
  }
}
