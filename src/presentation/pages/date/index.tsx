import dayjs, { type Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDepartament } from '~/infra/hooks'
import { getDaysByMonthAndYear } from '~/infra/utils/days'
import { States, type PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const currentDate = dayjs(localStorage.getItem('date_')) || dayjs()

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(currentDate)

  const handleSelectDate = useCallback((date: Dayjs | null) => {
    if (date) {
      localStorage.setItem('date_', date.toString())

      setSelectedDate(date)
    }
  }, [])

  const { data: departament } = useDepartament({
    colection: 'departaments',
    id: '0',
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`responsavel/${id}`)
    },
    [navigate],
  )

  const stockState = useMemo<States>(() => {
    return States.default
  }, [])

  const daysByMonth = useMemo(() => {
    return getDaysByMonthAndYear(2024, selectedDate!.month())
  }, [selectedDate])

  return (
    <DashboardContainer
      stockState={stockState}
      stock={[]}
      departament={departament}
      selectedDate={selectedDate}
      setSelectedDate={handleSelectDate}
      daysByMonth={daysByMonth}
      navigateToDetail={handleNavigateToDetail}
    />
  )
}

Component.displayName = 'Event'
