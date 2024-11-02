import { createGlobalStyle } from 'styled-components'

export const BodyStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.background['surface-hover']}
  }
`
