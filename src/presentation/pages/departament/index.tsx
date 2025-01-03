import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import type { PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const { data: departaments, isLoading } = useListProducts({
    colection: 'departaments',
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  return (
    <DashboardContainer
      search={search}
      setSearch={setSearch}
      isLoading={isLoading}
      departaments={
        departaments?.filter(
          (departament) =>
            departament.departament
              .toUpperCase()
              .includes(search.toUpperCase()) ||
            departament.label.toUpperCase().includes(search.toUpperCase()),
        ) ?? []
      }
      navigateToDetail={handleNavigateToDetail}
    />
  )
}

Component.displayName = 'Event'
