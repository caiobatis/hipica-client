import * as React from 'react'
import { Outlet } from 'react-router-dom'
// import { MenuItem } from '~/presentation/components/menu-item'
// import type { SidebarBarMenu } from '~/presentation/components/sidebar/types'
import type { PrivateContainerProps } from '~/presentation/layouts/private/types'
import {
  BodyStyle,
  LayoutContainer,
} from '~/presentation/layouts/private/ui/styles'
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
  return (
    <LayoutContainer role="main">
      <BodyStyle />

      {/* <StyledSidebar
        menus={menuItems}
        headerComponent={
          <ButtonMainAction
            {...testProps('button-go-to-transfer-product')}
            label="Repassar produto"
            onClick={onGoToTransferProduct}
          />
        }
        footerComponent={
          <MenuItem
            {...testProps('button-sign-out')}
            leadingIcon="logout"
            label="Sair"
            onClick={onSignOut}
          />
        }
      /> */}

      <div>
        <React.Suspense fallback={<p>carregando</p>}>
          <Outlet />
        </React.Suspense>
      </div>
    </LayoutContainer>
  )
}
