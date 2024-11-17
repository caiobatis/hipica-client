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
    DEPARTAMENT = 'DEPARTAMENT',
  }
}

export namespace Departament {
  export type ParametersDTO = {
    id: number
  }

  export type Parameters = {
    colection: string
    id: string
  }

  export type ResponseDTO = ProductDTO

  export type Response = ProductDTO

  export enum keys {
    DEPARTAMENT = 'DEPARTAMENT',
  }
}

export namespace UpdateDepartament {
  export type ParametersDTO = {
    id: number
  }

  export type Parameters = {
    colection: string
    id: string
    data: ProductDTO['scale']
  }

  export type ResponseDTO = ProductDTO

  export type Response = void

  export enum keys {
    DEPARTAMENT = 'DEPARTAMENT',
  }
}
