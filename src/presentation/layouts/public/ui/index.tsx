import { Box, Container } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '~/presentation/components/header'
import { BodyStyle } from '~/presentation/layouts/public/ui/styles'

export const PublicContainer: React.FC = () => {
  return (
    <main>
      <BodyStyle />

      <Header />

      <Container maxWidth="md">
        <Box padding={2}>
          <div>
            <React.Suspense fallback={<p>carregando</p>}>
              <Outlet />
            </React.Suspense>
          </div>
        </Box>
      </Container>
    </main>
  )
}
