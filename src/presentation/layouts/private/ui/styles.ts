import styled, { createGlobalStyle } from 'styled-components'
import { Sidebar } from '~/presentation/components'

const tokens = {
  sizes: {
    sidebarWidth: '256px',
    headerHeight: '64px',
  },
  zIndexes: {
    sidebar: 1,
    header: 2,
  },
}

export const StyledSidebar = styled(Sidebar)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding-top: ${tokens.sizes.headerHeight};
  width: ${tokens.sizes.sidebarWidth};
  z-index: ${tokens.zIndexes.sidebar};
`

export const LayoutContainer = styled.div`
  padding-left: ${tokens.sizes.sidebarWidth};
  padding-top: ${tokens.sizes.headerHeight};
`

export const Main = styled.div`
  padding: 2.5rem 7.5rem 0;
`

export const BodyStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background['surface-hover']}
  }
`
