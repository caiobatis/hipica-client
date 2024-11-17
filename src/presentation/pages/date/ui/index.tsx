import RefreshIcon from '@mui/icons-material/Refresh'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Grid2,
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
        mt={4}
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
            <Box
              display="inline-flex"
              alignItems="center"
              bgcolor="Highlight"
              color="white"
              px={2}
              py={0.5}
              borderRadius={1}
            >
              <Typography variant="body1" fontWeight={600}>
                {departament?.label} {bull} {departament?.departament}
              </Typography>
            </Box>
          </div>
        </Grid>

        <Grid xs={1} item>
          <Divider />
        </Grid>

        <Grid
          my={2}
          mt={4}
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

        <Grid mt={4} mb={2} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Sábado
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {daysByMonth.saturday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
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

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>

                    {day.updatedAt && (
                      <Typography variant="caption">
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

        <Grid mt={4} mb={2} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Domingo
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {daysByMonth.sunday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
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

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>
                    {day.updatedAt && (
                      <Typography variant="caption">
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

        <Grid mt={4} mb={2} xs={1} item>
          <Typography variant="h6" component="div" color="grey">
            Quarta-feira
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {daysByMonth.wednesday?.map((day) => (
            <Grid xs={1} item key={day.currentDate}>
              <CardActionArea
                onClick={() =>
                  navigateToDetail(`${year}&${month}&${day.currentDate}`)
                }
              >
                <Card variant="outlined">
                  <CardContent>
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

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      {day.currentDate}/{month}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <div>
        <Grid2
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 6, md: 8 }}
          mt={2}
        >
          {/* {items.map((item, index) => {
            return (
              <Grid2
                size={{ xs: 2, sm: 2 }}
                onClick={() => navigateToDetail('123')}
                key={item.title + index}
              >
                <Card variant="outlined">
                  <CardContent>
                    <Chip
                      label=""
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        visibility: 'hidden',
                      }}
                      color="secondary"
                    />

                    <Typography variant="h2" component="div" color="secondary">
                      20{bull}11
                    </Typography>

                    <Typography sx={{ mt: 1 }}>70% preenchido</Typography>
                  </CardContent>
                </Card>
              </Grid2>
            )
          })} */}

          {/* <Grid2 size={{ xs: 2, sm: 2 }}>
              <Card>
                <CardContent>
                  <Chip
                    label="evento próximo"
                    size="small"
                    sx={{ fontSize: 11, height: 20, mb: 1 }}
                    color="secondary"
                  />

                  <Typography variant="h2" component="div" color="secondary">
                    20{bull}11
                  </Typography>

                  <Typography sx={{ color: 'ButtonText', mt: 1 }}>
                    50% preenchido
                  </Typography>
                </CardContent>
              </Card>
            </Grid2> */}

          {/* <Grid2
              // sx={{ width: 'auto', minWidth: 150 }}
              size={{ xs: 2, sm: 2 }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Chip
                    label=""
                    size="small"
                    sx={{
                      fontSize: 11,
                      height: 20,
                      mb: 1,
                      visibility: 'hidden',
                    }}
                    color="secondary"
                  />

                  <Typography variant="h2" component="div" color="secondary">
                    20{bull}11
                  </Typography>

                  <Typography sx={{ mt: 1 }}>10% preenchido</Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2
              // sx={{ width: 'auto', minWidth: 150 }}
              size={{ xs: 2, sm: 2 }}
            >
              <Card variant="outlined">
                <CardContent>
                  <Chip
                    label=""
                    size="small"
                    sx={{
                      fontSize: 11,
                      height: 20,
                      mb: 1,
                      visibility: 'hidden',
                    }}
                    color="secondary"
                  />

                  <Typography variant="h2" component="div" color="secondary">
                    20{bull}11
                  </Typography>

                  <Typography sx={{ mt: 1 }}>10% preenchido</Typography>
                </CardContent>
              </Card>
            </Grid2> */}
        </Grid2>
      </div>
    </>
  )
}
