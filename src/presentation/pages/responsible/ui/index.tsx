import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

const currentYear = dayjs()

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
  updateScale,
  departament,
  form,
  setForm,
}) => {
  return (
    <>
      <Headbar />

      <Grid
        container
        mt={4}
        alignItems="center"
        justifyContent="space-between"
        bgcolor="ActiveBorder"
        p={2}
        borderRadius={1}
        columns={{ xs: 1, sm: 1, md: 1 }}
      >
        <BodyTitle
          number={3}
          title="Insira o responsável do dia"
          description="Caso seu departamento nao esteja na lista, entre em contato com departamento de gestão."
        />

        <Grid my={4} xs={1} item>
          <div>
            <Box
              px={2}
              py={0.5}
              borderRadius={1}
              display="inline-flex"
              bgcolor="Highlight"
              alignItems="center"
              color="white"
            >
              <Typography variant="body1" fontWeight={600}>
                {departament?.label} {bull} {departament?.departament}
              </Typography>
              {bull}
              <Typography variant="body1">27/10/2024</Typography>
            </Box>
          </div>
        </Grid>

        <Grid xs={1} item>
          <Divider />
        </Grid>

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
            Salvar
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
