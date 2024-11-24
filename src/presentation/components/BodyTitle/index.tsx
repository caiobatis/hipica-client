import { Grid, Grid2, Typography } from '@mui/material'

type Props = {
  number: number
  title: string
  description: string
}

export function BodyTitle({ number, title, description }: Props) {
  return (
    <Grid xs={1} alignItems="center" display="flex" item py={2}>
      {/* <Box
        width={40}
        height={40}
        minWidth={40}
        borderRadius={20}
        bgcolor="black"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={2}
      >
        <Typography variant="h3" component="div" color="white">
          {number}
        </Typography>
      </Box> */}

      <Grid2>
        <Typography variant="body2">Olá diretor(a),</Typography>
        <Typography variant="h4" component="div">
          {title}
        </Typography>

        {/* <Typography variant="body1" maxWidth={700}>
          {description}
        </Typography> */}
      </Grid2>
    </Grid>
  )
}
