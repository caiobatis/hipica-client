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
  currentDate: string
  scale?:
    | {
        updatedAt?: string
        updatedBy?: string
        fields: {
          [key: string]: string
        }
      }
    | undefined
  navigateToDetail: (id: string) => void
  updateScale: () => void
  setForm: (id: string, value: string) => void
  isLoading: boolean
  form: {
    [key: string]: string
  }
}
