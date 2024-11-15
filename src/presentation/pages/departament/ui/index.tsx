import {
  Box,
  Card,
  CardActionArea,
  Divider,
  Grid,
  Grid2,
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
}) => {
  const items = [
    {
      date: { seconds: 1730516400, nanoseconds: 389000000 },
      title: 'title aqui',
      description: 'description',
      schedule: {
        school: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
        worsheep1: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
        worsheep2: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
      },
    },
    {
      date: { seconds: 1730516400, nanoseconds: 389000000 },
      title: 'title aqui',
      description: 'description',
      schedule: {
        school: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
        worsheep1: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
        worsheep2: [
          {
            description: '',
            endTime: '10/10/2024',
            startTime: '10/10/2024',
            note: 'uma nota aqui',
            responsible: 'Joao da Silva',
            title: 'um titulo',
          },
        ],
      },
    },
  ]

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
          number={1}
          title="Selecione seu departamento"
          description="Caso seu departamento nao esteja na lista, entre em contato com departamento de gestão."
        />

        <Grid xs={1} mt={4}>
          <Divider />
        </Grid>

        <Grid mt={2} container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid xs={1} item key={index}>
              <CardActionArea onClick={() => navigateToDetail('1')}>
                <Card variant="outlined">
                  <Grid>
                    <Typography variant="h4" component="div" color="secondary">
                      Sonopastia
                    </Typography>

                    <Typography sx={{ mt: 1 }}>Matheus Machado</Typography>
                  </Grid>
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
