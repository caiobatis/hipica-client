import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  inputsCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from './custom'
import { colorSchemes, shadows, shape, typography } from './themePrimitives'

interface AppThemeProps {
  children: React.ReactNode
}

export default function AppTheme({ children }: AppThemeProps) {
  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-mui-color-scheme',
      cssVarPrefix: 'template',
    },
    colorSchemes,
    typography,
    shadows,
    shape,
    components: {
      ...inputsCustomizations,
      // ...dataDisplayCustomizations,
      // ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  })

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

// export const StyledThemeProvider: React.FC<Props> = ({ children }) => (
//   <ThemeProvider theme={theme}>
//     <GlobalStyles />

//     <StyleSheetManager shouldForwardProp={() => true}>
//       {children}
//     </StyleSheetManager>
//   </ThemeProvider>
// )
