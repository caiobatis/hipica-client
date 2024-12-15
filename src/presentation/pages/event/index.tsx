import { Backdrop, CircularProgress } from '@mui/material'
import dayjs, { type Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import { getDaysByMonthAndYear } from '~/infra/utils/days'
import type { PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const storageDate = localStorage.getItem('date_')

  const currentDate = dayjs(storageDate ?? new Date())

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(currentDate)

  const handleSelectDate = useCallback((date: Dayjs | null) => {
    if (date) {
      localStorage.setItem('date_', date.toString())

      setSelectedDate(date)
    }
  }, [])

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  const { data: departaments, isLoading } = useListProducts({
    colection: 'departaments',
  })

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
      let rest: Array<{
        updatedAt?: string
        updatedBy?: string
        departament: string
        label: string
      }> = []

      departaments?.forEach((item) => {
        const date = `${day}/${currentDate.month() + 1}/${currentDate.year()}`

        if (item.scale && item.scale[date]) {
          const element = {
            departament: item.departament,
            label: item.label,
            ...item.scale[date],
          }

          rest = [...rest, element]
        }
      })

      return {
        currentDate: day,
        items: rest,
      }
    })

    monthScale.wednesday = days.wednesday.map((day) => {
      let rest: Array<{
        updatedAt?: string
        updatedBy?: string
        departament: string
        label: string
      }> = []

      departaments?.forEach((item) => {
        const date = `${day}/${currentDate.month() + 1}/${currentDate.year()}`

        if (item.scale && item.scale[date]) {
          const element = {
            departament: item.departament,
            label: item.label,
            ...item.scale[date],
          }

          rest = [...rest, element]
        }
      })

      return {
        currentDate: day,
        items: rest,
      }
    })

    monthScale.saturday = days.saturday?.map((day) => {
      let rest: Array<{
        updatedAt?: string
        updatedBy?: string
        departament: string
        label: string
      }> = []

      departaments?.forEach((item) => {
        const date = `${day}/${currentDate.month() + 1}/${currentDate.year()}`

        if (item.scale && item.scale[date]) {
          const element = {
            departament: item.departament,
            label: item.label,
            ...item.scale[date],
          }

          rest = [...rest, element]
        }
      })

      return {
        currentDate: day,
        items: rest,
      }
    })

    return monthScale
  }, [currentDate, departaments, selectedDate])

  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <DashboardContainer
        selectedDate={selectedDate}
        setSelectedDate={handleSelectDate}
        daysByMonth={daysByMonth}
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
