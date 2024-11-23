import RefreshIcon from '@mui/icons-material/Refresh'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
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

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  departament,
  daysByMonth,
  selectedDate,
  refetch,
  setSelectedDate,
  navigateToDetail,
}) => {
  const month = selectedDate!.month() + 1
  const year = selectedDate!.year()

  return (
    <>
      <Headbar />

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        bgcolor="ActiveBorder"
        p={2}
        borderRadius={1}
        columns={{ xs: 1, sm: 1, md: 1 }}
      >
        <BodyTitle
          number={2}
          title="Selecione o mês e o dia"
          description="Caso seu departamento nao esteja na lista, entre em contato com departamento de gestão."
        />

        <Grid my={4} xs={1} item>
          <div>
            <Typography variant="body1">
              {departament?.label}/{departament?.departament}
            </Typography>
            {/* <Box
              display="inline-flex"
              alignItems="center"
              bgcolor="black"
              color="white"
              px={2}
              py={0.5}
              borderRadius={1}
            >
            </Box> */}
          </div>
        </Grid>

        <Grid xs={1} item>
          <Divider />
        </Grid>

        <Grid mt={4} mb={0} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Mês
          </Typography>
        </Grid>
        <Grid
          my={2}
          mt={2}
          xs={1}
          sm={0.5}
          item
          display="flex"
          alignItems="center"
        >
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

          <IconButton sx={{ ml: 2 }} onClick={refetch}>
            <RefreshIcon />
          </IconButton>
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
      </Grid>
    </>
  )
}
