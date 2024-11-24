import styled, { createGlobalStyle } from 'styled-components'

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

export const LayoutContainer = styled.div`
  /* padding-left: ${tokens.sizes.sidebarWidth};
  padding-top: ${tokens.sizes.headerHeight}; */
`

export const Main = styled.div`
  padding: 2.5rem 7.5rem 0;
`

export const BodyStyle = createGlobalStyle`
  body {
    background-color: #FFFFFF;
  }
`
