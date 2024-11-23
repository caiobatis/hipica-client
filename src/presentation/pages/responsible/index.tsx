import { Backdrop, CircularProgress } from '@mui/material'
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

  const [form, setForm] = useState({
    event1: '',
    event2: '',
    es: '',
  })

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

    if (form.event1) {
      updateDepartment.mutate(
        {
          colection: 'departaments',
          id: parameters.dep!,
          data: {
            ...departament?.scale,
            [`${date.day}/${date.month}/${date.year}`]: {
              ...form,
              updatedAt: new Date().toString(),
              updatedBy: localStorage.getItem('email')?.toString(),
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
    }
  }, [form, date, updateDepartment, departament, navigate])

  const currentScale = departament?.scale[currentDate]

  useEffect(() => {
    if (currentScale) {
      setForm(currentScale)
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
