import {
  Box,
  Card,
  CardActionArea,
  Chip,
  CircularProgress,
  Container,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
  departaments,
  isLoading,
  search,
  setSearch,
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
          <Typography variant="h6">Selecione o departamento</Typography>

          <Typography variant="body2" mt={0.5}>
            Acesse seu departamento para gerenciar sua escala
          </Typography>
        </Box>
        <Box mb={4} display="flex" flexDirection="column">
          <FormLabel>Procure pelo seu departamento</FormLabel>
          <TextField
            required
            id="outlined-required"
            label="Departamento"
            placeholder="Departamento"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            autoComplete="off"
            sx={{
              backgroundColor: 'white',
            }}
          />
        </Box>
      </Container>

      <Box bgcolor="#fff">
        <Container fixed>
          <Box textAlign="right">
            <Typography>{departaments?.length} itens encontrados</Typography>
          </Box>

          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            columns={{ xs: 1 }}
            py={1}
          >
            <Grid container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
              {departaments?.map((departament) => (
                <Grid xs={1} item key={departament.id}>
                  <CardActionArea
                    onClick={() => navigateToDetail(departament.id.toString())}
                  >
                    <Card variant="outlined" sx={{ borderWidth: 1 }}>
                      <Grid>
                        <Typography>{departament.director}</Typography>
                        <Typography
                          variant="h5"
                          component="div"
                          color="textPrimary"
                          mt={1}
                        >
                          {departament.label}
                        </Typography>

                        <Chip
                          label={departament.departament}
                          sx={{
                            mt: 1,
                            height: 20,
                            fontSize: 12,
                            color: 'white',
                            bgcolor: 'black',
                          }}
                        />
                      </Grid>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>

            {isLoading && (
              <Grid item xs={1}>
                <Box display="flex" my={2} justifyContent="center">
                  <CircularProgress color="inherit" />
                </Box>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
