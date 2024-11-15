import { Navigate } from 'react-router-dom'

export const privateRoutes = [
  { index: true, element: <Navigate to="/entrar" replace /> },
  {
    path: 'entrar',
    lazy: () => import('~/presentation/pages/auth'),
  },
  {
    path: 'departamento',
    children: [
      {
        path: '',
        lazy: () => import('~/presentation/pages/departament'),
      },
      {
        path: ':id',
        lazy: () => import('~/presentation/pages/date'),
      },
      {
        path: ':id/responsavel/:id',
        lazy: () => import('~/presentation/pages/responsible'),
      },
    ],
  },
]
