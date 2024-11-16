import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDepartament } from '~/infra/hooks'
import { States, type PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const [form, setForm] = useState({
    event1: '',
    event2: '',
    es: '',
  })
  const navigate = useNavigate()

  const { data: departament } = useDepartament({
    colection: 'departaments',
    id: '0',
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  const handleSetForm = useCallback((field: string, value: string) => {
    // setForm()
  }, [])

  const handleUpdateScale = useCallback(() => {
    // console.log(field, value)
  }, [form])

  const stockState = useMemo<States>(() => {
    return States.default
  }, [])

  return (
    <DashboardContainer
      stockState={stockState}
      departament={departament}
      form={form}
      setForm={handleSetForm}
      navigateToDetail={handleNavigateToDetail}
      updateScale={handleUpdateScale}
    />
  )
}

Component.displayName = 'Event'
