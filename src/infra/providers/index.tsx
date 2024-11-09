import { CssBaseline } from '@mui/material'
import { StyledEngineProvider } from '@mui/material/styles'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import { ptBR } from '@mui/x-date-pickers/locales'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from '~/infra/providers/modal'
// import { RecaptchaProvider } from '~/infra/providers/recaptcha'
import { ToastProvider } from '~/infra/providers/toast'
import { router } from '~/routes/router'
import AppTheme from './theme'

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient()

function Providers(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <AppTheme>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            localeText={
              ptBR.components.MuiLocalizationProvider.defaultProps.localeText
            }
          >
            <CssBaseline />

            <RouterProvider router={router} />

            <ModalProvider />

            <ToastProvider />
          </LocalizationProvider>
        </AppTheme>
      </StyledEngineProvider>
    </QueryClientProvider>
  )
}

export default Providers
