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

  const {
    data: departaments,
    isLoading,
    isRefetching,
    refetch,
  } = useListProducts({
    colection: 'departaments',
  })

  const scale: Array<{
    updatedAt?: string
    updatedBy?: string
    departament: string
    label: string
  }> = useMemo(() => {
    let newscale: Array<{
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
          phone: item.phone,
          ...item.scale[`${date.day}/${date.month}/${date.year}`],
        }

        newscale = [...newscale, element]
      } else {
        const element = {
          departament: item.departament,
          label: item.label,
          phone: item.phone,
        }
        newscale = [...newscale, element]
      }
    })

    return newscale
  }, [date.day, date.month, date.year, departaments])

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
        refetch={refetch}
      />

      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open || isLoading || isRefetching}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

Component.displayName = 'Event'
