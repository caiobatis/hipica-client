import type { Dayjs } from 'dayjs'
import type { ListProducts } from '~/domain/usecases'

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
  event1?: string
  event2?: string
  es?: string
  items?: Array<{
    fields: {
      [keyof: string]: string
    }
    label: string
  }>
}

export interface DashboardContainerProps {
  stockState?: States
  stock?: ListProducts.Response
  setSelectedDate: (date: Dayjs | null) => void
  selectedDate: Dayjs | null
  navigateToDetail: (id: string) => void
  daysByMonth: {
    saturday: Array<DayEvent>
    sunday: Array<DayEvent>
    wednesday: Array<DayEvent>
  }
}
