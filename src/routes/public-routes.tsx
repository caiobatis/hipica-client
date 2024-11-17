import { Navigate, type RouteObject } from 'react-router-dom'

export const publicRoutes: Array<RouteObject> = [
  { index: true, element: <Navigate to="/entrar" replace /> },
  {
    path: '/entrar',
    lazy: () => import('~/presentation/pages/auth'),
  },
]
