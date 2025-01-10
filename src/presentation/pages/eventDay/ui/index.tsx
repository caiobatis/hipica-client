import IosShareIcon from '@mui/icons-material/IosShare'
import SyncIcon from '@mui/icons-material/Sync'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import {
  Box,
  Container,
  Fab,
  Grid,
  Grid2,
  IconButton,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { Headbar } from '~/presentation/components/Headbar'
import type { DashboardContainerProps } from '../types'

export const DashboardContainer: React.FC<DashboardContainerProps> = ({
  scale,
  date,
  refetch,
}) => {
  const dateText = dayjs(`${date.year}-${date.month}-${date.day}`).format(
    'DD/MM/YYYY',
  )

  let message = `Olá pessoal, segue a escala do dia ${dateText}:%0A%0A`

  scale.forEach((item) => {
    message =
      message +
      `*${item.label}*: ${Object.values(item.fields).map((key) => [key])}%0A%0A`
  })

  return (
    <>
      {window.screen.width > 768 ? (
        <Fab
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 80,
            display: 'none',
          }}
          color="primary"
          onClick={() => {
            navigator.clipboard.writeText(message)
          }}
        >
          <IosShareIcon />
        </Fab>
      ) : (
        <Fab
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
          }}
          color="success"
          href={`whatsapp://send?text=${message}`}
          data-action="share/whatsapp/share"
          variant="extended"
        >
          <WhatsAppIcon sx={{ mr: 1 }} /> Enviar escala
        </Fab>
      )}

      <Container fixed>
        <Headbar />

        <Grid
          xs={1}
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          item
          py={2}
        >
          <Grid2>
            <Typography variant="body2">
              Acompanhe toda a escala do dia
            </Typography>
            <Typography variant="h4" component="div">
              {dateText}
            </Typography>
          </Grid2>

          <Grid2>
            <IconButton
              color="info"
              // sx={{ bgcolor: 'transparent !important', color: 'white' }}
              onClick={refetch}
            >
              <SyncIcon />
            </IconButton>
          </Grid2>
        </Grid>
      </Container>

      <Container fixed>
        <Grid container columns={{ xs: 1 }}>
          {scale.map((item) => (
            <Grid xs={1} item key={item.label}>
              <Box
                bgcolor="#f7f7f7"
                borderRadius={2}
                p={2}
                mb={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid2>
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
                </Grid2>
                <Grid2>
                  {!!item.phone && (
                    <IconButton
                      sx={{ bgcolor: 'transparent !important', color: 'gray' }}
                      href={`whatsapp://send?phone=${item.phone}`}
                      data-action="share/whatsapp/share"
                    >
                      <WhatsAppIcon />
                    </IconButton>
                  )}
                </Grid2>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
