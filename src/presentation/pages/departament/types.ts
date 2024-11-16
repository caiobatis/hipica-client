import type { ListProducts } from '~/domain/usecases'
import type { ProductDTO } from '~/infra/api/dtos'

export interface PageProps {}

export enum States {
  empty = 'empty',
  default = 'default',
  loading = 'loading',
  genericError = 'genericError',
}

export interface DashboardContainerProps {
  stockState?: States
  stock?: ListProducts.Response
  departaments?: Array<ProductDTO>
  navigateToDetail: (id: string) => void
}
