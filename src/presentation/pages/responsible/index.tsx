import { Backdrop, CircularProgress } from '@mui/material'
import dayjs from 'dayjs'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Departament } from '~/domain/usecases'
import { useDepartament, useUpdateDepartament } from '~/infra/hooks'
import { queryClient } from '~/infra/providers'
import type { PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const parameters = useParams()
  const navigate = useNavigate()

  if (!parameters?.dep) {
    navigate(-1)
    return
  }

  const date = useMemo(() => {
    return {
      year: parameters?.id?.split('&')[0],
      month: parameters?.id?.split('&')[1],
      day: parameters?.id?.split('&')[2],
    }
  }, [parameters])

  const currentDate = `${date.day}/${date.month}/${date.year}`
  const dateFull = dayjs(`${date.year}/${date.month}/${date.day}`)

  const [form, setForm] = useState({})

  const { data: departament, isLoading } = useDepartament({
    colection: 'departaments',
    id: parameters?.dep,
  })

  const updateDepartment = useUpdateDepartament()

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  const handleSetForm = useCallback((field: string, value: string) => {
    setForm((state) => ({
      ...state,
      [field]: value,
    }))
  }, [])

  const handleUpdateScale = useCallback(() => {
    handleOpen()

    if (form) {
      updateDepartment.mutate(
        {
          colection: 'departaments',
          id: parameters.dep!,
          data: {
            ...departament?.scale,
            [`${date.day}/${date.month}/${date.year}`]: {
              updatedAt: new Date().toString(),
              updatedBy: localStorage.getItem('email')?.toString(),
              fields: form,
            },
          },
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries([
              Departament.keys.DEPARTAMENT,
              { id: parameters.dep },
            ])
            handleClose()
            navigate(-1)
          },
          onError: () => {
            handleClose()
          },
        },
      )
      return
    }

    handleClose()
  }, [
    form,
    updateDepartment,
    parameters.dep,
    departament?.scale,
    date.day,
    date.month,
    date.year,
    navigate,
  ])

  const currentScale = departament?.scale?.[currentDate]

  useEffect(() => {
    if (currentScale) {
      setForm(currentScale.fields)
    }
  }, [departament, currentScale])

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <DashboardContainer
        form={form}
        currentDate={currentDate}
        dateFull={dateFull}
        scale={currentScale}
        departament={departament}
        isLoading={updateDepartment.isLoading}
        setForm={handleSetForm}
        updateScale={handleUpdateScale}
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
