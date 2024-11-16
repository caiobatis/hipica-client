import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import type { DashboardContainerProps } from '~/presentation/pages/auth/types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  email,
  error,
  setAuth,
  setEmail,
}) => {
  return (
    <>
      <Grid2 mt={8}>
        <Grid2 textAlign="center">
          <Typography variant="h4" mb={1}>
            Gestão de Cultos
          </Typography>

          <Typography variant="body1" mb={1}>
            Para contribuir com a organizacao dos eventos da IASD Portal da
            Hípica, insira seu e-mail:
          </Typography>
        </Grid2>

        <Grid2 sx={{ '& .MuiTextField-root': { width: '100%' } }}>
          <Box mt={2}>
            <TextField
              required
              id="outlined-required"
              label="E-mail"
              placeholder="email@aqui.com.br"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="off"
              error={!!error}
              helperText={error}
            />
          </Box>

          <Box mt={2}>
            <Button
              type="button"
              variant="contained"
              size="large"
              fullWidth
              onClick={setAuth}
            >
              Entrar
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </>
  )
}
