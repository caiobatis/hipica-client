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

export type DayEvent = {
  currentDate?: string
  updatedAt?: string
  updatedBy?: string
  fields: {
    [key: string]: string
  }
}

export interface DashboardContainerProps {
  stockState?: States
  stock?: ListProducts.Response
  setSelectedDate: (date: Dayjs | null) => void
  departament?: ProductDTO
  selectedDate: Dayjs | null
  navigateToDetail: (id: string) => void
  refetch: () => any
  daysByMonth: {
    saturday: Array<DayEvent>
    sunday: Array<DayEvent>
    wednesday: Array<DayEvent>
  }
}
