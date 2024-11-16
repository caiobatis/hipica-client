import type { Dayjs } from 'dayjs'
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
  setSelectedDate: (date: Dayjs | null) => void
  departament?: ProductDTO
  selectedDate: Dayjs | null
  navigateToDetail: (id: string) => void
  daysByMonth: {
    saturday: Array<number>
    sunday: Array<number>
    wednesday: Array<number>
  }
}
