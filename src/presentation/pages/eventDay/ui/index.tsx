import { Box, Container, Grid, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { BodyTitle } from '~/presentation/components/BodyTitle'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  scale,
  date,
}) => {
  return (
    <>
      <Container fixed>
        <Headbar />

        <BodyTitle
          number={1}
          msg="Acompanhe toda a escala do dia"
          title={`${date.day}/${date.month}/${date.year}`}
        />

        {/* <Box bgcolor="#f7f7f7" borderRadius={2} p={2} mb={2}>
          <Typography variant="h6">Selecione o mês e dia</Typography>

          <Typography variant="body2" my={0.5}>
            Os dias estao separados em sábados, domingos e quartas.
          </Typography>
        </Box> */}

        {/* <Typography variant="h3">
          {date.day}/{date.month}/{date.year}
        </Typography> */}
      </Container>

      <Container fixed>
        <Grid container columns={{ xs: 1 }}>
          {scale.map((item) => (
            <Grid xs={1} item key={item.label}>
              <Box bgcolor="#f7f7f7" borderRadius={2} p={2} mb={2}>
                <Typography variant="h6">{item.label}</Typography>

                {Object.keys(item.fields).map((key) => (
                  <Typography key={key} variant="body1">
                    {item.fields[key]}
                  </Typography>
                ))}

                {item.updatedAt && (
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                  >
                    atualizado em {dayjs(item.updatedAt).format('DD/MM/YYYY')}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
