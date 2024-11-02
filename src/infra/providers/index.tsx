import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from '~/infra/providers/modal'
// import { RecaptchaProvider } from '~/infra/providers/recaptcha'
import { ToastProvider } from '~/infra/providers/toast'
import { router } from '~/routes/router'
import { StyledThemeProvider } from './theme'

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient()

function Providers(): React.ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <div role="main">
        <StyledThemeProvider>
          <RouterProvider router={router} />

          <ModalProvider />

          <ToastProvider />
        </StyledThemeProvider>
      </div>
    </QueryClientProvider>
  )
}

export default Providers
