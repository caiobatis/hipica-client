import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Grid,
  Grid2,
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

const currentYear = dayjs()

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
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
          number={2}
          title="Selecione o mês e o dia"
          description="Caso seu departamento nao esteja na lista, entre em contato com departamento de gestão."
        />

        <Grid my={4} xs={1}>
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
                Sonoplastia
              </Typography>
              {/* {bull}
              <Typography variant="body1">27/10/2024</Typography> */}
            </Box>
          </div>
        </Grid>

        <Grid xs={1}>
          <Divider />
        </Grid>

        {/* <Grid mt={4} xs={1}>
          <Typography variant="h6" component="div" color="secondary">
            Mês
          </Typography>
        </Grid> */}
        <Grid my={2} mt={4} xs={1} sm={0.5}>
          <DatePicker
            label="Selecione o mês"
            openTo="month"
            views={['month']}
            defaultValue={currentYear}
            sx={{
              width: '100%',
            }}
          />
        </Grid>

        <Grid mt={4} mb={2} xs={1}>
          <Typography variant="h6" component="div" color="grey">
            Sábado
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {[1, 2, 3, 4].map((index) => (
            <Grid xs={1} item key={index}>
              <CardActionArea onClick={() => navigateToDetail('0')}>
                <Card variant="outlined">
                  <CardContent>
                    <Chip
                      label="completo"
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        // visibility: 'hidden',
                        color: 'white',
                      }}
                      color="success"
                    />

                    {/* <Typography variant="body1">dia</Typography> */}
                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      0{index}/11
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Grid mt={4} mb={2} xs={1}>
          <Typography variant="h6" component="div" color="grey">
            Domingo
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {[1, 2, 3, 4].map((index) => (
            <Grid xs={1} item key={index}>
              <CardActionArea>
                <Card variant="outlined">
                  <CardContent>
                    <Chip
                      label="incompleto"
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        // visibility: 'hidden',
                        // color: 'white',
                      }}
                      color="info"
                    />

                    {/* <Typography variant="body1">dia</Typography> */}
                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      0{index}/11
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>

        <Grid mt={4} mb={2} xs={1}>
          <Typography variant="h6" component="div" color="grey">
            Quarta-feira
          </Typography>
        </Grid>

        <Grid container columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
          {[1, 2, 3, 4].map((index) => (
            <Grid xs={1} item key={index}>
              <CardActionArea onClick={() => navigateToDetail('0')}>
                <Card variant="outlined">
                  <CardContent>
                    <Chip
                      label="pendente"
                      size="small"
                      sx={{
                        fontSize: 11,
                        height: 20,
                        mb: 1,
                        // visibility: 'hidden',
                        color: 'white',
                      }}
                      color="warning"
                    />

                    <Typography
                      variant="h2"
                      component="div"
                      color="textPrimary"
                    >
                      20{bull}11
                    </Typography>

                    {/* <Typography sx={{ mt: 1 }}>70% preenchido</Typography> */}
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <div>
        {/* <Grid2 container mt={2}>
          <Grid2>
            <Typography variant="button" component="div">
              Sábados
            </Typography>
          </Grid2>
        </Grid2> */}

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

      <div>
        {/* <Grid2 container mt={2}>
            <Grid2>
              <Typography variant="button" component="div">
                Domingos
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2 container mt={2} gap={2}>
            <CardActionArea sx={{ width: 'auto', minWidth: 150 }}>
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
            </CardActionArea>

            <CardActionArea sx={{ width: 'auto', minWidth: 150 }}>
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
            </CardActionArea>

            <CardActionArea sx={{ width: 'auto', minWidth: 150 }}>
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
            </CardActionArea>

            <CardActionArea sx={{ width: 'auto', minWidth: 150 }}>
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
            </CardActionArea>
          </Grid2> */}
      </div>
    </>
  )
}
