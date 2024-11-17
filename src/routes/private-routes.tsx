export const privateRoutes = [
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
        path: ':id/responsavel/:id',
        lazy: () => import('~/presentation/pages/responsible'),
      },
    ],
  },
]
