import { Navigate, type RouteObject } from 'react-router-dom'

export const publicRoutes: Array<RouteObject> = [
  { element: <Navigate to="/entrar" /> },
  {
    path: '/',
    lazy: () => import('~/presentation/pages/auth'),
  },
]
