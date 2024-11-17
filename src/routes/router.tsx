import { createBrowserRouter } from 'react-router-dom'
import { ErrorLayout, PrivateLayout } from '~/presentation/layouts'
import { privateRoutes } from '~/routes/private-routes'

/**
 * Application routes
 * https://reactrouter.com/en/main/routers/create-browser-router
 */
export const router = createBrowserRouter([
  // {
  //   path: '',
  //   element: <PrivateLayout />,
  //   errorElement: <ErrorLayout />,
  //   children: publicRoutes,
  // },
  {
    path: '',
    element: <PrivateLayout />,
    errorElement: <ErrorLayout />,
    children: privateRoutes,
  },
])

// Clean up on module reload (HMR)
// https://vitejs.dev/guide/api-hmr
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    router.dispose()
  })
}
