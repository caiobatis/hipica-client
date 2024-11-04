import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid2,
  Typography,
} from '@mui/material'
import type { DashboardContainerProps } from '~/presentation/pages/dashboard/types'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  return (
    <Container maxWidth="md" fixed>
      <Box padding={3}>
        <Box sx={{ height: '5vh' }} />
        <Grid2 container justifyContent="flex-start" alignItems="flex-start">
          <Grid2 mr={2}>
            <Avatar
              alt="IASD Portal da Hípica"
              src="https://i.pinimg.com/originals/32/1b/5e/321b5e2dbf1869ad6d15bb3af1a76426.png"
            />
          </Grid2>
          <Grid2 size="grow">
            <Typography variant="overline" lineHeight={1.5}>
              IASD Portal da Hípica
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              lineHeight={1}
              textTransform="uppercase"
            >
              Gestão de cultos
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container mt={2}>
          <Grid2>
            <Typography variant="body1">
              Acesse a lista de cultos separados por sábado, domingo e quartas.
              Insira os resposáveis de acordo com seu departamento.
            </Typography>
          </Grid2>
        </Grid2>

        <Divider sx={{ mt: 4 }} />

        <Grid2 container mt={4}>
          <Grid2>
            <Typography variant="h5" component="div">
              no{bull}vem{bull}bro
            </Typography>
          </Grid2>

          <Grid2>
            <Button variant="contained" size="small">
              Alterar mês
            </Button>
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
          </Grid2>
        </div>

        <div>
          <Grid2 container mt={2}>
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
          </Grid2>
        </div>
      </Box>
    </Container>
  )
}
