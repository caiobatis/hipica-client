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
}

export interface DashboardContainerProps {
  navigateToDetail: (id: string) => void
  date: {
    year: string | undefined
    month: string | undefined
    day: string | undefined
  }
  scale: Array<
    {
      updatedAt?: string
      updatedBy?: string
      departament: string
      label: string
      phone: string
      // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
    } & any
  >
  refetch: (options: any) => unknown
}
