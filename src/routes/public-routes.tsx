import type { RouteObject } from 'react-router-dom'

export const publicRoutes: Array<RouteObject> = [
  {
    path: 'entrar',
    lazy: () => import('~/presentation/pages/login'),
  },
]
