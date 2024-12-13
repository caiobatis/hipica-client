import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/presentation/components/header'
import type { PrivateContainerProps } from '~/presentation/layouts/private/types'
import { BodyStyle } from '~/presentation/layouts/private/ui/styles'

export const PrivateContainer: React.FC<PrivateContainerProps> = () => {
  const email = localStorage.getItem('email')

  return (
    <main>
      <BodyStyle />

      <Header email={email ?? ''} />

      <div>
        <React.Suspense fallback={<p>carregando</p>}>
          <Outlet />
        </React.Suspense>
      </div>
    </main>
  )
}
