import { Box, Container } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/presentation/components/header'
// import { MenuItem } from '~/presentation/components/menu-item'
// import type { SidebarBarMenu } from '~/presentation/components/sidebar/types'
import type { PrivateContainerProps } from '~/presentation/layouts/private/types'
import { BodyStyle } from '~/presentation/layouts/private/ui/styles'
// import { routes } from '~/routes'

// const menuItems: Array<SidebarBarMenu> = [
//   {
//     label: 'Início',
//     linkTo: '/dashboard',
//     leadingIcon: 'home',
//   },
//   {
//     label: 'Estoque',
//     linkTo: '/meu-estoque',
//     leadingIcon: 'machine',
//   },
//   {
//     label: 'Receber produtos',
//     linkTo: routes.receiveProducts.home,
//     leadingIcon: 'add-product',
//   },
//   {
//     label: 'Links úteis',
//     linkTo: routes.usefulLinks,
//     leadingIcon: 'circle-check',
//   },
// ]

export const PrivateContainer: React.FC<PrivateContainerProps> = () => {
  const email = localStorage.getItem('email')
  return (
    <div>
      <BodyStyle />

      <Header email={email ?? ''} />

      <Container maxWidth="md">
        <Box padding={2}>
          <div>
            <React.Suspense fallback={<p>carregando</p>}>
              <Outlet />
            </React.Suspense>
          </div>
        </Box>
      </Container>
    </div>
  )
}
