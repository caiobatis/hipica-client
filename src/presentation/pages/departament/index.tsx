import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import { States, type PageProps } from './types'
import { DashboardContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  // const departaments = [
  //   {
  //     id: 0,
  //     label: 'Sonoplastia',
  //     departament: 'Sonoplastia',
  //     director: 'Matheus Machado',
  //   },
  //   {
  //     id: 1,
  //     label: 'Mídia',
  //     departament: 'Streaming',
  //     director: 'Carlos',
  //   },
  //   {
  //     id: 2,
  //     label: 'Anúncios',
  //     departament: 'Comunicação',
  //     director: 'Rafaela Paro',
  //   },
  //   {
  //     id: 3,
  //     label: 'Recepção',
  //     departament: 'Recepção',
  //     director: 'Josué',
  //   },
  //   {
  //     id: 4,
  //     label: 'Dízimos e Ofertas',
  //     departament: 'Diaconato',
  //     director: '',
  //   },
  //   {
  //     id: 5,
  //     label: 'Lição dos Adultos',
  //     departament: 'Escola Sabatina',
  //     director: '',
  //   },
  //   {
  //     id: 6,
  //     label: 'Momento da Família',
  //     departament: 'Ministério da Família',
  //     director: '',
  //   },
  //   {
  //     id: 7,
  //     label: 'Provai e Vede',
  //     departament: 'Mordomia',
  //     director: '',
  //   },
  //   {
  //     id: 8,
  //     label: 'Oração pelos Dízimos',
  //     departament: 'Mordomia',
  //     director: '',
  //   },
  //   {
  //     id: 9,
  //     label: 'Adoração Infantil',
  //     departament: 'Departamento Infantil',
  //     director: 'Gloria Queiroz',
  //   },
  //   {
  //     id: 10,
  //     label: 'Oração intercessora',
  //     departament: 'Gestão',
  //     director: 'Rafaela Paro',
  //   },
  //   {
  //     id: 11,
  //     label: 'Gestão',
  //     departament: 'Gestão',
  //     director: 'Rafaela Paro',
  //   },
  //   {
  //     id: 12,
  //     label: 'Sermão',
  //     departament: 'Diretoria',
  //     director: 'Marcelo Rasquinho',
  //   },
  // ]

  const { data: departaments } = useListProducts({
    colection: 'departaments',
  })

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  const stockState = useMemo<States>(
    () => {
      // if (isLoadingStock) return States.loading
      // if (isStockError) return States.genericError
      return States.default
    },
    [
      // isLoadingStock, isStockError
    ],
  )

  return (
    <DashboardContainer
      stockState={stockState}
      // departaments={departaments}
      departaments={departaments ?? []}
      navigateToDetail={handleNavigateToDetail}
    />
  )
}

Component.displayName = 'Event'
