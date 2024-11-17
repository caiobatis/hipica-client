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
  departament: ProductDTO | undefined
  scale?: {
    event1: string
    event2: string
    es: string
  }
  navigateToDetail: (id: string) => void
  updateScale: () => void
  setForm: (id: string, value: string) => void
  isLoading: boolean
  form: {
    event1: string
    event2: string
    es: string
  }
}
