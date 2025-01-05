import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import GradingIcon from '@mui/icons-material/Grading'
import MenuIcon from '@mui/icons-material/Menu'
import PeopleIcon from '@mui/icons-material/People'
import {
  Box,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="IASD Portal da Hípica" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to="/departamento">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <PeopleIcon sx={{ color: 'black' }} />
              </ListItemIcon>

              <Typography variant="body1" color="black">
                Gerir de escalas
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to="/escala-geral">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <GradingIcon sx={{ color: 'black' }} />
              </ListItemIcon>

              <Typography variant="body1" color="black">
                Visualizar escalas
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  )

  return (
    <>
      <Box sx={{ py: 2, bgcolor: '#625784' }}>
        <Container fixed>
          <Grid container columns={{ xs: 4 }}>
            <Grid item display="flex" xs={3}>
              {['/departamento', '/escala-geral'].includes(
                window.location.pathname,
              ) ? (
                <IconButton
                  color="info"
                  sx={{ bgcolor: 'transparent !important', color: 'white' }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <IconButton
                  color="info"
                  sx={{ bgcolor: 'transparent !important', color: 'white' }}
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIcon />
                </IconButton>
              )}

              <Box ml={1}>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  lineHeight={1.5}
                  color="white"
                >
                  {window.location.pathname === '/departamento'
                    ? 'Gestão de escalas'
                    : 'Escala geral'}
                </Typography>
                <Typography variant="body2" color="white">
                  {email}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={1} display="flex" justifyContent="flex-end">
              <IconButton
                color="info"
                sx={{ bgcolor: 'transparent !important', color: 'white' }}
                onClick={logout}
              >
                <ExitToAppIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}
