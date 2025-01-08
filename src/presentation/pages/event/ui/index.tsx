import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
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
    height: '100%',
  },
}

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
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
          title="Escala geral"
          msg="Olá, acompanhe todas as escalas por aqui."
        />

        {/* <Box bgcolor="#f7f7f7" borderRadius={2} p={2} mb={2}>
          <Typography variant="h6">Selecione o mês e dia</Typography>

          <Typography variant="body2" my={0.5}>
            Os dias estao separados em sábados, domingos e quartas.
          </Typography>
        </Box> */}
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
              // defaultValue={new dayjs}
              sx={{
                width: '100%',
              }}
            />

            {/* <IconButton sx={{ ml: 2 }} onClick={refetch}>
            <RefreshIcon />
          </IconButton> */}
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
                      day.items?.length &&
                      navigateToDetail(`${year}&${month}&${day.currentDate}`)
                    }
                    sx={{
                      backgroundColor: day.items?.length
                        ? '#fff'
                        : 'transparent',
                    }}
                  >
                    <Card variant="outlined">
                      <CardContent>
                        <Box width={'100%'}>
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

                          <Box display={'flex'}>
                            <Chip
                              label={
                                day.items?.length
                                  ? `${day.items?.length} na escala`
                                  : 'Sem escala'
                              }
                              size="small"
                              color={day.items?.length ? 'primary' : 'default'}
                              sx={{
                                height: 21,
                                margin: '7px 0',
                                fontSize: 12,
                              }}
                            />

                            {/* {!!day.items?.length && (
                              <AvatarGroup
                                sx={{
                                  width: '100%',
                                  height: 24,
                                  margin: '5px 0',
                                  justifyContent: 'flex-end',
                                }}
                              >
                                {day.items?.length &&
                                  day.items
                                    .map((item) => (
                                      <Avatar
                                        key={item.label}
                                        alt={item.label}
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          bgcolor: 'green',
                                        }}
                                      />
                                    ))
                                    .slice(0, 2)}

                                {day.items.length > 2 && (
                                  <Avatar alt="" sx={{ width: 24, height: 24 }}>
                                    <Typography variant="caption">
                                      +{day.items.length - 2}
                                    </Typography>
                                  </Avatar>
                                )}
                              </AvatarGroup>
                            )} */}
                          </Box>

                          {day.updatedAt && (
                            <Typography variant="caption" component="div">
                              atualizado em{' '}
                              {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                            </Typography>
                          )}
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
                        <Box width={'100%'}>
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
                            {dayjs(
                              `${year}/${month}/${day.currentDate}`,
                            ).format('DD/MM')}
                          </Typography>

                          {/* {day.items?.length ? (
                            <AvatarGroup
                              max={2}
                              sx={{
                                width: '100%',
                                height: 24,
                                margin: '5px 0',
                                justifyContent: 'flex-end',
                              }}
                            >
                              {day.items?.length &&
                                day.items.map((item) => (
                                  <Avatar
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    alt={item['Responsável']}
                                    sx={{ width: 24, height: 24 }}
                                  />
                                ))}

                              {day.items.length > 2 && (
                                <Avatar alt="" sx={{ width: 24, height: 24 }}>
                                  <span>+{day.items.length - 2}</span>
                                </Avatar>
                              )}
                            </AvatarGroup>
                          ) : (
                            <Chip
                              label={'Sem escala'}
                              size="small"
                              color={'warning'}
                              sx={{
                                height: 21,
                                margin: '7px 0',
                                fontSize: 12,
                                color: 'white',
                              }}
                            />
                          )} */}
                          <Chip
                            label={
                              day.items?.length
                                ? `${day.items?.length} na escala`
                                : 'Sem escala'
                            }
                            size="small"
                            color={day.items?.length ? 'primary' : 'default'}
                            sx={{
                              height: 21,
                              margin: '7px 0',
                              fontSize: 12,
                            }}
                          />

                          {day.updatedAt && (
                            <Typography variant="caption" component="div">
                              atualizado em{' '}
                              {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                            </Typography>
                          )}
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
              {daysByMonth.wednesday?.map((day) => (
                <Grid xs={1} item key={day.currentDate}>
                  <CardActionArea
                    onClick={() =>
                      navigateToDetail(`${year}&${month}&${day.currentDate}`)
                    }
                  >
                    <Card variant="outlined">
                      <CardContent>
                        <Box width={'100%'}>
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
                            {dayjs(
                              `${year}/${month}/${day.currentDate}`,
                            ).format('DD/MM')}
                          </Typography>

                          {/* {day.items?.length ? (
                            <AvatarGroup
                              max={2}
                              sx={{
                                width: '100%',
                                height: 24,
                                margin: '5px 0',
                                justifyContent: 'flex-end',
                              }}
                            >
                              {day.items?.length &&
                                day.items.map((item) => (
                                  <Avatar
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    alt={item['Responsável']}
                                    sx={{ width: 24, height: 24 }}
                                  />
                                ))}

                              {day.items.length > 2 && (
                                <Avatar alt="" sx={{ width: 24, height: 24 }}>
                                  <span>+{day.items.length - 2}</span>
                                </Avatar>
                              )}
                            </AvatarGroup>
                          ) : (
                            <Chip
                              label={'Sem escala'}
                              size="small"
                              color={'warning'}
                              sx={{
                                height: 21,
                                margin: '7px 0',
                                fontSize: 12,
                                color: 'white',
                              }}
                            />
                          )} */}
                          <Chip
                            label={
                              day.items?.length
                                ? `${day.items?.length} na escala`
                                : 'Sem escala'
                            }
                            size="small"
                            color={day.items?.length ? 'primary' : 'default'}
                            sx={{
                              height: 21,
                              margin: '7px 0',
                              fontSize: 12,
                            }}
                          />

                          {day.updatedAt && (
                            <Typography variant="caption" component="div">
                              atualizado em{' '}
                              {dayjs(day.updatedAt).format('DD/MM/YYYY')}
                            </Typography>
                          )}
                        </Box>
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
