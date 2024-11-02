export interface PageProps {}

export enum States {
  empty = 'empty',
  default = 'default',
  loading = 'loading',
  genericError = 'genericError',
}

export interface DashboardContainerProps {
  stockState?: States
}
