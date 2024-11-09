import { Navigate } from 'react-router-dom'

export const privateRoutes = [
  { index: true, element: <Navigate to="/entrar" replace /> },
  {
    path: 'entrar',
    lazy: () => import('~/presentation/pages/auth'),
  },
  {
    path: 'evento',
    children: [
      {
        path: '',
        lazy: () => import('~/presentation/pages/evento'),
      },
      {
        path: ':id',
        lazy: () => import('~/presentation/pages/detalhes-do-evento'),
      },
      {
        path: ':id/agenda/:id',
        lazy: () => import('~/presentation/pages/agenda-do-evento'),
      },
    ],
  },
  {
    path: 'links-uteis',
    lazy: () => import('~/presentation/pages/useful-links'),
  },
]
