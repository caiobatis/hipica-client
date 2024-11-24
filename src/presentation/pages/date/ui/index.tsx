import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  departament,
  daysByMonth,
  selectedDate,
  setSelectedDate,
  navigateToDetail,
}) => {
  const month = selectedDate!.month() + 1
  const year = selectedDate!.year()

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
          <Typography variant="h6">Selecione o mês e dia</Typography>

          <Typography variant="body2" my={0.5}>
            Os dias estao separados em sábados, domingos e quartas.
          </Typography>

          <Divider sx={{ my: 2 }}></Divider>

          <Typography variant="h6">Resumo</Typography>
          <Typography variant="body1" my={0.5}>
            {departament?.label} / {departament?.departament}
          </Typography>
        </Box>
      </Container>

      <Container fixed>
        <Grid xs={1} sm={0.5} item>
          <Typography variant="caption" component="div">
            Selecione o mês
          </Typography>
          <DatePicker
            label="Selecione o mês"
            openTo="month"
            views={['month']}
            value={selectedDate}
            onChange={setSelectedDate}
            // defaultValue={new dayjs}
            sx={{
              width: '100%',
            }}
          />

          {/* <IconButton sx={{ ml: 2 }} onClick={refetch}>
            <RefreshIcon />
          </IconButton> */}
        </Grid>

        {/* <Grid mt={4} mb={2} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Sábado
          </Typography>
        </Grid> */}

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} py={3}>
          {daysByMonth.saturday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="overline"
                      fontWeight={600}
                      component="div"
                      color="grey"
                    >
                      Sábado
                    </Typography>

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>

                    {/* <Box py={1}>
                      <Typography variant="body1" color="grey">
                        Culto: Matheus
                      </Typography>
                    </Box> */}

                    <Chip
                      label={day.event1 || day.es ? 'completo' : 'pendente'}
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        color: 'white',
                      }}
                      color={day.event1 || day.es ? 'success' : 'error'}
                    />

                    {day.updatedAt && (
                      <Typography variant="caption" component="div">
                        atualizado em{' '}
                        {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} py={3}>
          {daysByMonth.sunday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="overline"
                      fontWeight={600}
                      component="div"
                      color="grey"
                    >
                      Domingo
                    </Typography>

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>

                    {/* <Box py={1}>
                    <Typography variant="body1" color="grey">
                      Culto: Matheus
                    </Typography>
                  </Box> */}

                    <Chip
                      label={day.event1 || day.es ? 'completo' : 'pendente'}
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        color: 'white',
                      }}
                      color={day.event1 || day.es ? 'success' : 'error'}
                    />

                    {day.updatedAt && (
                      <Typography variant="caption" component="div">
                        atualizado em{' '}
                        {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        {/* <Grid mt={4} mb={2} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Quarta-feira
          </Typography>
        </Grid> */}

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2} py={3}>
          {daysByMonth.wednesday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
                    <Typography
                      variant="overline"
                      fontWeight={600}
                      component="div"
                      color="grey"
                    >
                      Quarta
                    </Typography>

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>

                    {/* <Box py={1}>
                    <Typography variant="body1" color="grey">
                      Culto: Matheus
                    </Typography>
                  </Box> */}

                    <Chip
                      label={day.event1 || day.es ? 'completo' : 'pendente'}
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        color: 'white',
                      }}
                      color={day.event1 || day.es ? 'success' : 'error'}
                    />

                    {day.updatedAt && (
                      <Typography variant="caption" component="div">
                        atualizado em{' '}
                        {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
