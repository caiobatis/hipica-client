import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  form,
  isLoading,
  departament,
  setForm,
  updateScale,
}) => {
  return (
    <>
      <Container fixed>
        <Headbar />

        <BodyTitle
          number={1}
          title="Gerencie sua escala"
          description="Caso seu departamento tenha várias responsabilidades, teremos mais uma opcao para a escolha"
        />

        <Box bgcolor="#f7f7f7" borderRadius={2} p={2} mb={2}>
          <Typography variant="h6">Insira o responsável</Typography>

          <Typography variant="body2" my={0.5}>
            Os dias estao separados em sábados, domingos e quartas.
          </Typography>

          <Divider sx={{ my: 2 }}></Divider>

          <Typography variant="h6">Resumo</Typography>
          <Typography variant="body1" my={0.5}>
            {departament?.label} / {departament?.departament}
          </Typography>

          <Typography variant="body1" my={0.5}>
            27/11/2024
          </Typography>
        </Box>
      </Container>

      <Container fixed>
        <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} my={2}>
          <Grid xs={1} item>
            <Typography
              variant="overline"
              fontWeight={500}
              color="textSecondary"
            >
              Culto 1
            </Typography>
            <Box mt={1} sx={{ '& .MuiTextField-root': { minWidth: '100%' } }}>
              <TextField
                id="outlined-required"
                label="Responsável"
                placeholder="Fulano Silva"
                value={form.event1}
                onChange={(event) => setForm('event1', event.target.value)}
                autoComplete="off"
              />
            </Box>
          </Grid>
          <Grid xs={1} item>
            <Typography
              variant="overline"
              fontWeight={500}
              color="textSecondary"
            >
              Culto 2
            </Typography>
            <Box mt={1} sx={{ '& .MuiTextField-root': { minWidth: '100%' } }}>
              <TextField
                id="outlined-required"
                label="Responsável"
                placeholder="Fulano Silva"
                value={form.event2}
                onChange={(event) => setForm('event2', event.target.value)}
                autoComplete="off"
              />
            </Box>
          </Grid>
          <Grid xs={1} item>
            <Typography
              variant="overline"
              fontWeight={500}
              color="textSecondary"
            >
              Escola Sabatina
            </Typography>
            <Box mt={1} sx={{ '& .MuiTextField-root': { minWidth: '100%' } }}>
              <TextField
                id="outlined-required"
                label="Responsável"
                placeholder="Fulano Silva"
                value={form.es}
                onChange={(event) => setForm('es', event.target.value)}
                autoComplete="off"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid xs={1} item my={2}>
          <Button
            type="button"
            variant="contained"
            size="large"
            fullWidth
            onClick={updateScale}
          >
            {isLoading ? 'Salvando' : 'Salvar'}
          </Button>
        </Grid>
      </Container>
    </>
  )
}
