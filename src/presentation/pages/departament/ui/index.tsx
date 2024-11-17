import {
  Box,
  Card,
  CardActionArea,
  Chip,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  navigateToDetail,
  departaments,
  isLoading,
}) => {
  return (
    <>
      <Headbar hasBackButton={false} />

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

        {isLoading && (
          <Grid item xs={1}>
            <Box display="flex" my={2} justifyContent="center">
              <CircularProgress color="inherit" />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  )
}
