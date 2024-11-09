import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Grid2,
  Typography,
} from '@mui/material'
import type { DashboardContainerProps } from '~/presentation/pages/detalhes-do-evento/types'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
}) => {
  const items = [
    {
      date: { seconds: 1730516400, nanoseconds: 389000000 },
      title: 'Culto 1',
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
      title: 'Escola sábatina',
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
      title: 'Culto 2',
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

              <Grid2 display="flex" alignItems="center">
                <CalendarTodayIcon sx={{ fontSize: 14, mr: 1 }} />

                <Typography variant="body1" component="div" mr={1}>
                  Data:
                </Typography>
                <Typography
                  variant="body1"
                  component="div"
                  fontWeight={600}
                  color="textSecondary"
                >
                  27{bull}11{bull}2024
                </Typography>
              </Grid2>
            </Grid2>
          </Grid>

          <Grid xs={1} textAlign="right" mt={2}>
            <Box width="100%" height={8} bgcolor="lightgrey" borderRadius={20}>
              <Box width="70%" height={8} bgcolor="black" borderRadius={20} />
            </Box>

            <Box display="flex" alignItems="center">
              <Typography variant="h4" component="div">
                70%
              </Typography>

              <Typography variant="body1" component="div">
                completo
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid2
          container
          spacing={{ xs: 2 }}
          columns={{ xs: 1, sm: 2, md: 3 }}
          mt={2}
        >
          {items.map((item, index) => {
            return (
              <Grid2
                onClick={() => navigateToDetail('123')}
                size={{ xs: 1 }}
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

                    <Typography variant="h4" component="div" color="secondary">
                      {/* Culto {bull} 1 */}
                      {item.title}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>70% preenchido</Typography>
                    <Typography sx={{ mt: 1 }} variant="caption">
                      alterado em 28/10/2024 às 17:32
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            )
          })}

          {/* 
          <Grid2 size={{ xs: 1 }}>
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

                <Typography variant="h4" component="div" color="secondary">
                  Escola Sabatina
                </Typography>

                <Typography sx={{ mt: 1 }}>70% preenchido</Typography>
                <Typography sx={{ mt: 1 }} variant="caption">
                  alterado em 28/10/2024 às 17:32
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 size={{ xs: 1 }}>
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

                <Typography variant="h4" component="div" color="secondary">
                  Culto {bull} 2
                </Typography>

                <Typography sx={{ mt: 1 }}>70% preenchido</Typography>
                <Typography sx={{ mt: 1 }} variant="caption">
                  alterado em 28/10/2024 às 17:32
                </Typography>
              </CardContent>
            </Card>
          </Grid2> */}
        </Grid2>

        <Divider sx={{ mt: 4 }} />
      </>
    </>
  )
}
