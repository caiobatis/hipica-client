import { Backdrop, CircularProgress } from '@mui/material'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import type { PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()
  const parameters = useParams()

  const date = useMemo(() => {
    return {
      year: parameters?.id?.split('&')[0],
      month: parameters?.id?.split('&')[1],
      day: parameters?.id?.split('&')[2],
    }
  }, [parameters])

  const { data: departaments, isLoading } = useListProducts({
    colection: 'departaments',
  })

  let scale: Array<{
    updatedAt?: string
    updatedBy?: string
    departament: string
    label: string
  }> = []

  departaments?.forEach((item) => {
    if (item.scale && item.scale[`${date.day}/${date.month}/${date.year}`]) {
      const element = {
        departament: item.departament,
        label: item.label,
        ...item.scale[`${date.day}/${date.month}/${date.year}`],
      }

      scale = [...scale, element]
    }
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <DashboardContainer
        date={date}
        scale={scale}
        navigateToDetail={handleNavigateToDetail}
      />

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open || isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

Component.displayName = 'Event'
