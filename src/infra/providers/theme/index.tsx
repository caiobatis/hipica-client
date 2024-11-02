import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { GlobalStyles } from './global'

type Props = {
  children?: React.ReactNode
}

const theme = {
  color: {
    background: {
      'surface-hover': '',
    },
  },
}

export const StyledThemeProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />

    <StyleSheetManager shouldForwardProp={() => true}>
      {children}
    </StyleSheetManager>
  </ThemeProvider>
)
