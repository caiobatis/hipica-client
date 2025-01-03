import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

const styles = {
  slide: {
    background: '#f7f7f7',
    paddingBottom: 40,
  },
}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  departament,
  daysByMonth,
  selectedDate,
  setSelectedDate,
  navigateToDetail,
}) => {
  const month = selectedDate!.month() + 1
  const year = selectedDate!.year()

  const [value, setValue] = useState(0)

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

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
        <Grid container columns={{ xs: 2 }}>
          <Grid xs={2} sm={1} item mb={4}>
            <Typography variant="caption" component="div">
              Selecione o mês
            </Typography>

            <DatePicker
              label="Selecione o mês"
              openTo="month"
              views={['month']}
              value={selectedDate}
              onChange={setSelectedDate}
              sx={{
                width: '100%',
              }}
            />
          </Grid>

          <Tabs
            value={value}
            onChange={(_, index) => handleChange(index)}
            aria-label="basic tabs example"
          >
            <Tab label="SÁBADOS" />
            <Tab label="DOMINGOS" />
            <Tab label="QUARTAS" />
          </Tabs>
        </Grid>
      </Container>

      <SwipeableViews index={value} onChangeIndex={handleChange}>
        <div style={Object.assign({}, styles.slide)}>
          <Container fixed>
            <Grid
              container
              columns={{ xs: 2, sm: 3, md: 4 }}
              spacing={2}
              py={3}
            >
              {daysByMonth.saturday?.map((day) => (
                <Grid xs={1} item key={day.currentDate}>
                  <CardActionArea
                    onClick={() =>
                      navigateToDetail(`${year}&${month}&${day.currentDate}`)
                    }
                  >
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex">
                          <div>
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
                              {dayjs(
                                `${year}/${month}/${day.currentDate}`,
                              ).format('DD/MM')}
                            </Typography>

                            <Chip
                              label={
                                day.fields &&
                                  Object?.keys(day.fields)?.length > 0
                                  ? 'completo'
                                  : 'pendente'
                              }
                              size="small"
                              sx={{
                                fontSize: 11,
                                height: 20,
                                mb: 1,
                                color: 'white',
                              }}
                              color={
                                day.fields &&
                                  Object?.keys(day.fields)?.length > 0
                                  ? 'success'
                                  : 'error'
                              }
                            />

                            {day.updatedAt && (
                              <Typography variant="caption" component="div">
                                atualizado em{' '}
                                {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                              </Typography>
                            )}
                          </div>
                        </Box>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <Container fixed>
            <Grid
              container
              columns={{ xs: 2, sm: 3, md: 4 }}
              spacing={2}
              py={3}
            >
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
                          {dayjs(`${year}/${month}/${day.currentDate}`).format(
                            'DD/MM',
                          )}
                        </Typography>

                        <Chip
                          label={
                            day.fields && Object?.keys(day.fields)?.length > 0
                              ? 'completo'
                              : 'pendente'
                          }
                          size="small"
                          sx={{
                            fontSize: 11,
                            height: 20,
                            mb: 1,
                            color: 'white',
                          }}
                          color={
                            day.fields && Object?.keys(day.fields)?.length > 0
                              ? 'success'
                              : 'error'
                          }
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
        </div>
        <div style={Object.assign({}, styles.slide)}>
          <Container fixed>
            <Grid
              container
              columns={{ xs: 2, sm: 3, md: 4 }}
              spacing={2}
              py={3}
            >
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
                          {dayjs(`${year}/${month}/${day.currentDate}`).format(
                            'DD/MM',
                          )}
                        </Typography>

                        <Chip
                          label={
                            day.fields && Object?.keys(day.fields)?.length > 0
                              ? 'completo'
                              : 'pendente'
                          }
                          size="small"
                          sx={{
                            fontSize: 11,
                            height: 20,
                            mb: 1,
                            color: 'white',
                          }}
                          color={
                            day.fields && Object?.keys(day.fields)?.length > 0
                              ? 'success'
                              : 'error'
                          }
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
        </div>
      </SwipeableViews>
    </>
  )
}
