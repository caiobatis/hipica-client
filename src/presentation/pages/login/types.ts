export enum States {
  default = 'default',
  loading = 'loading',
  recharge = 'recharge',
}

export interface LoginContainerProps {
  state: States
}
