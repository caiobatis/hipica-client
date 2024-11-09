import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import {
  States,
  type PageProps,
} from '~/presentation/pages/agenda-do-evento/types'
import { DashboardContainer } from '~/presentation/pages/agenda-do-evento/ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const {
    data: stockResponse,
    isLoading: isLoadingStock,
    isError: isStockError,
    refetch: refetchStock,
  } = useListProducts({
    colection: 'saturdays',
  })

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

  const handleNavigateToDetail = useCallback(
    (id: string) => {
      navigate(`${id}`)
    },
    [navigate],
  )

  return (
    <DashboardContainer
      stockState={stockState}
      stock={stockResponse}
      navigateToDetail={handleNavigateToDetail}
    />
  )
}

Component.displayName = 'Dashboard'
