import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid2,
  Typography,
} from '@mui/material'

type Props = {
  email?: string
}

export function Header({ email }: Props) {
  return (
    <div>
      <Box sx={{ bgcolor: 'white' }}>
        <Container sx={{ p: 4, bgcolor: 'white' }}>
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
            {!!email && (
              <Grid2 size="auto" textAlign="right">
                <Typography variant="caption">Autenticado com:</Typography>
                <Typography variant="subtitle2">{email}</Typography>
              </Grid2>
            )}
          </Grid2>
        </Container>
      </Box>
      <Divider />
    </div>
  )
}
