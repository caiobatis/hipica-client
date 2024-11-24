import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { BodyStyle } from '~/presentation/layouts/public/ui/styles'

export const PublicContainer: React.FC = () => {
  return (
    <main>
      <BodyStyle />

      <Container sx={{ px: 4, py: 4 }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Avatar
              alt="IASD Portal da Hípica"
              src="https://i.pinimg.com/originals/32/1b/5e/321b5e2dbf1869ad6d15bb3af1a76426.png"
            />
          </Grid>

          <Grid item ml={1}>
            <Typography variant="overline" lineHeight={1.5}>
              IASD Portal da Hípica
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              lineHeight={1}
              textTransform="uppercase"
            >
              Gestão de cultos
            </Typography>
          </Grid>
        </Grid>
      </Container>

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
