import type { ProductDTO } from '~/infra/api/dtos'

export interface PageProps {}

export enum States {
  empty = 'empty',
  default = 'default',
  loading = 'loading',
  genericError = 'genericError',
}

export interface DashboardContainerProps {
  search: string
  setSearch: (search: string) => void
  isLoading: boolean
  departaments?: Array<ProductDTO>
  navigateToDetail: (id: string) => void
}
