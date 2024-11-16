import {
  Card,
  CardActionArea,
  Chip,
  Divider,
  Grid,
  Grid2,
  Typography,
} from '@mui/material'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
  departaments,
}) => {
  return (
    <>
      <Headbar hasBackButton={false} />

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

        <Grid xs={1} mt={4} item>
          <Divider />
        </Grid>

        <Grid mt={2} container columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          {departaments?.map((departament) => (
            <Grid xs={1} item key={departament.id}>
              <CardActionArea
                onClick={() => navigateToDetail(departament.id.toString())}
              >
                <Card variant="outlined">
                  <Grid>
                    <Chip
                      label={departament.departament}
                      sx={{
                        mb: 1,
                        height: 20,
                        fontSize: 12,
                        color: 'white',
                        bgcolor: 'Highlight',
                      }}
                    />

                    <Typography
                      variant="h5"
                      component="div"
                      color="textPrimary"
                    >
                      {departament.label}
                    </Typography>

                    <Typography sx={{ mt: 1 }}>
                      {departament.director}
                    </Typography>
                  </Grid>
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
