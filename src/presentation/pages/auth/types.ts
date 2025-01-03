export interface PageProps {}

export enum States {
  empty = 'empty',
  default = 'default',
  loading = 'loading',
  genericError = 'genericError',
}

export interface DashboardContainerProps {
  email: string
  error: string
  setEmail: (email: string) => void
  setAuth: () => void
}
