import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Grid2,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import type { DashboardContainerProps } from '~/presentation/pages/evento/types'

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
      <Grid2
        container
        mt={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2>
          <Typography variant="h4" mb={1}>
            Ajude a organizar nossos cultos
          </Typography>

          <Typography variant="body1" mb={1}>
            Escolha o momento do evento desejado
          </Typography>
        </Grid2>

        <Grid2>
          <Button type="button" variant="outlined" size="large" fullWidth>
            Voltar
          </Button>
        </Grid2>
      </Grid2>

      <Grid
        container
        mt={4}
        alignItems="center"
        justifyContent="space-between"
        bgcolor="ActiveBorder"
        p={2}
        borderRadius={1}
        columns={{ xs: 1, sm: 2, md: 2 }}
      >
        <Grid xs={1} alignItems="center" justifyContent="space-between">
          <Grid2>
            <Typography variant="h6" component="div">
              sábado {bull} 11 de novembro
            </Typography>
          </Grid2>
        </Grid>

        <Grid xs={1} textAlign="right">
          {/* <Typography variant="body1" component="div" mr={1}>
            Mês selecionado
          </Typography> */}

          <DatePicker
            // label="Selecione o mês"
            openTo="month"
            views={['month']}
            defaultValue={currentYear}
          />
        </Grid>
      </Grid>

      <Grid2 mt={4}>
        {/* <Grid2 textAlign="center">
          <Typography variant="h4" mb={1}>
            Contribua com a organicação
          </Typography>

          <Typography variant="body1" mb={1}>
            Selecione o mês e dia que deseja alterar
          </Typography>
        </Grid2> */}
      </Grid2>
      <Grid2 container mt={4} justifyContent="space-between">
        <Grid2></Grid2>

        <Grid2>
          {/* <Typography variant="h5" component="div">
                no{bull}vem{bull}bro
              </Typography> */}
        </Grid2>
      </Grid2>

      <div>
        <Grid2 container mt={2}>
          <Grid2>
            <Typography variant="button" component="div">
              Sábados
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 6, md: 8 }}
          mt={2}
        >
          {items.map((item, index) => {
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
          })}

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
