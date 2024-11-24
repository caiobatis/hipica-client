import { Grid2 } from '@mui/material'

export function Headbar() {
  return (
    <div>
      <Grid2 container alignItems="center" justifyContent="space-between">
        <Grid2 mb={2}>
          {/* <Typography variant="h4" mb={1}>
            Ajude a organizar nossos cultos
          </Typography>

          <Typography variant="body1">
            Organize sua escala e contribua com a organizacao dos cultos.
          </Typography> */}
        </Grid2>

        {/* {hasBackButton && (
          <Grid2 mb={2}>
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
        )} */}
      </Grid2>
    </div>
  )
}
