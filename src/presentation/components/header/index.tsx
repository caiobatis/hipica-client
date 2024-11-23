import {
  Avatar,
  Box,
  CardActionArea,
  Container,
  Divider,
  Grid2,
  Link,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

type Props = {
  email?: string
}

export function Header({ email }: Props) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('date_')

    document.location.reload()
  }

  return (
    <div>
      <Box sx={{ bgcolor: 'white' }}>
        <Container sx={{ px: 4, py: 2, bgcolor: 'white' }}>
          <Grid2 container justifyContent="flex-start" alignItems="flex-start">
            <Grid2 mr={2}>
              <CardActionArea onClick={() => navigate('')}>
                <Avatar
                  alt="IASD Portal da Hípica"
                  src="https://i.pinimg.com/originals/32/1b/5e/321b5e2dbf1869ad6d15bb3af1a76426.png"
                />
              </CardActionArea>
            </Grid2>
            <Grid2 flexGrow={2}>
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
            {!!email && (
              <Box
                sx={{ display: { xs: 'none', sm: 'block' } }}
                textAlign="right"
              >
                <Typography variant="caption">Autenticado com:</Typography>

                <br />

                <div>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    component="span"
                  >
                    {email}
                  </Typography>
                  <Typography variant="caption"> • </Typography>

                  <Link onClick={logout} sx={{ cursor: 'pointer' }}>
                    <Typography variant="caption">sair</Typography>
                  </Link>
                </div>
              </Box>
            )}
          </Grid2>
        </Container>
      </Box>

      <Divider />
    </div>
  )
}
