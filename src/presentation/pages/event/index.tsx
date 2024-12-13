import dayjs, { type Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
      return {
        currentDate: day,
      }
    })

    monthScale.wednesday = days.wednesday.map((day) => {
      return {
        currentDate: day,
      }
    })

    monthScale.saturday = days.saturday?.map((day) => {
      return {
        currentDate: day,
      }
    })

    return monthScale
  }, [selectedDate])

  return (
    <>
      <DashboardContainer
        selectedDate={selectedDate}
        setSelectedDate={handleSelectDate}
        daysByMonth={daysByMonth}
        navigateToDetail={handleNavigateToDetail}
      />
    </>
  )
}

Component.displayName = 'Event'
