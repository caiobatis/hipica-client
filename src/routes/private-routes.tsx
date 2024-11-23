import { Navigate } from 'react-router-dom'

export const privateRoutes = [
  { element: <Navigate to="/" replace /> },
  {
    path: '',
    lazy: () => import('~/presentation/pages/auth'),
  },
  {
    path: '/',
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
        path: ':dep/responsavel/:id',
        lazy: () => import('~/presentation/pages/responsible'),
      },
    ],
  },
]
