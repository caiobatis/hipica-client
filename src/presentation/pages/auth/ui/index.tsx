import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import type { DashboardContainerProps } from '~/presentation/pages/auth/types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  email,
  error,
  setAuth,
  setEmail,
}) => {
  const form = (
    <Grid item sx={{ '& .MuiTextField-root': { width: '100%' } }}>
      <Box mt={4}>
        <FormLabel>Para entrar insira seu e-mail</FormLabel>
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          placeholder="email@aqui.com.br"
          type="email"
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
    </Grid>
  )
  return (
    <>
      <Box height={30} />

      <Grid container columns={{ xs: 5 }} alignItems="center">
        <Grid item xs={3}>
          <Typography variant="h3" mb={1}>
            Olá, pode entrar.
          </Typography>

          <Typography variant="body1" mb={1}>
            Gerenciar sua escala nunca foi tão simples e fácil.
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: '100%',
              pr: 3,
              pt: 3,
            }}
          >
            {form}
          </Box>
        </Grid>

        <Grid item xs={2} sx={{ '& .MuiTextField-root': { width: '100%' } }}>
          <Box p={2}>
            <img width="100%" src="/assets/images/support.svg" role="img" />
          </Box>
        </Grid>
      </Grid>

      <Grid container columns={{ xs: 1 }}>
        <Box sx={{ display: { xs: 'block', sm: 'none' }, width: '100%' }}>
          {form}
        </Box>
      </Grid>
    </>
  )
}
