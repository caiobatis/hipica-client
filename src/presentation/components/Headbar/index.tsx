import { Button, Grid2, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Headbar({ hasBackButton = true }) {
  const navigate = useNavigate()
  return (
    <div>
      <Grid2
        container
        mt={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid2 mb={2}>
          <Typography variant="h4" mb={1}>
            Ajude a organizar nossos cultos
          </Typography>

          <Typography variant="body1" mb={1}>
            Organize sua escala e contribua com a organizacao dos cultos.
          </Typography>
        </Grid2>

        {hasBackButton && (
          <Grid2>
            <Button
              type="button"
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => navigate(-1)}
            >
              Voltar
            </Button>
          </Grid2>
        )}
      </Grid2>
    </div>
  )
}
