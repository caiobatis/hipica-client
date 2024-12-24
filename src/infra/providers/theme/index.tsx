import { ptBR as coreptBR } from '@mui/material/locale'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ptBR } from '@mui/x-date-pickers/locales'
import 'dayjs/locale/pt-br'
import {
  inputsCustomizations,
  navigationCustomizations,
  surfacesCustomizations,
} from './custom'
import { shadows, shape, typography } from './themePrimitives'
interface AppThemeProps {
  children: React.ReactNode
}

export default function AppTheme({ children }: AppThemeProps) {
  const theme = createTheme(
    {
      cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
        cssVarPrefix: 'template',
      },
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
    },
    ptBR,
    coreptBR,
  )

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
