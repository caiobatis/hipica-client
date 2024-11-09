import type { RouteObject } from 'react-router-dom'

export const publicRoutes: Array<RouteObject> = [
  {
    path: 'entrara',
    lazy: () => import('~/presentation/pages/login'),
  },
]
