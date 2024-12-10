import { Backdrop, CircularProgress } from '@mui/material'
import dayjs, { type Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDepartament } from '~/infra/hooks'
import { getDaysByMonthAndYear } from '~/infra/utils/days'
import type { PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const parameters = useParams()

  if (!parameters?.id) {
    navigate(-1)
    return
  }

  const storageDate = localStorage.getItem('date_')

  const currentDate = dayjs(storageDate ?? new Date())

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(currentDate)

  const handleSelectDate = useCallback((date: Dayjs | null) => {
    if (date) {
      localStorage.setItem('date_', date.toString())

      setSelectedDate(date)
    }
  }, [])

  const {
    data: departament,
    refetch: refetchDepartment,
    isLoading,
    isRefetching,
  } = useDepartament({
    colection: 'departaments',
    id: parameters?.id?.toString(),
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`responsavel/${id}`)
    },
    [navigate],
  )

  const daysByMonth = useMemo(() => {
    const days = getDaysByMonthAndYear(
      selectedDate!.year(),
      selectedDate!.month(),
    )
    const monthScale = {
      sunday: [{}],
      saturday: [{}],
      wednesday: [{}],
    }

    monthScale.sunday = days.sunday.map((day) => {
      const date = `${day}/${selectedDate!.month() + 1}/${selectedDate?.year()}`

      return {
        currentDate: day,
        ...departament?.scale?.[date],
      }
    })

    monthScale.wednesday = days.wednesday.map((day) => {
      const date = `${day}/${selectedDate!.month() + 1}/${selectedDate?.year()}`

      return {
        currentDate: day,
        ...departament?.scale?.[date],
      }
    })

    monthScale.saturday = days.saturday?.map((day) => {
      const date = `${day}/${selectedDate!.month() + 1}/${selectedDate?.year()}`

      return {
        currentDate: day,
        ...departament?.scale?.[date],
      }
    })

    return monthScale
  }, [selectedDate, departament])

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <DashboardContainer
        departament={departament}
        selectedDate={selectedDate}
        setSelectedDate={handleSelectDate}
        daysByMonth={daysByMonth}
        navigateToDetail={handleNavigateToDetail}
        refetch={refetchDepartment}
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
