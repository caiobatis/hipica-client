import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { BodyStyle } from '~/presentation/layouts/public/ui/styles'

export const PublicContainer: React.FC = () => {
  return (
    <main>
      <BodyStyle />
      <React.Suspense>
        <Outlet />
      </React.Suspense>
    </main>
  )
}
