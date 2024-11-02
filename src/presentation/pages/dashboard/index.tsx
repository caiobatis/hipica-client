import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useListProducts } from '~/infra/hooks'
import { States, type PageProps } from '~/presentation/pages/dashboard/types'
import { DashboardContainer } from '~/presentation/pages/dashboard/ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()

  const {
    data: stockResponse,
    isLoading: isLoadingStock,
    isError: isStockError,
    refetch: refetchStock,
  } = useListProducts({
    status: 'GOOD',
  })

  // const {
  //   data: resalesResponse,
  //   isLoading: isLoadingResales,
  //   isError: isResalesError,
  //   refetch: refetchResales,
  // } = useListServiceOrders({
  //   status: 'BAIXADA',
  //   pageSize: 3,
  // })

  // const stockSummary = useMemo(() => {
  //   const productSummary = stockResponse?.summary.byProduct
  //   return productSummary ?? []
  // }, [stockResponse])

  // const lastResales = useMemo(() => {
  //   return resalesResponse?.pages.flatMap((page) => page.data) ?? []
  // }, [resalesResponse?.pages])

  // const onReloadStock = useCallback(() => {
  //   refetchStock()
  // }, [refetchStock])

  // const onReloadResales = useCallback(() => {
  //   refetchResales()
  // }, [refetchResales])

  const stockState = useMemo<States>(() => {
    if (isLoadingStock) return States.loading
    if (isStockError) return States.genericError
    return States.default
  }, [isLoadingStock, isStockError])

  // const resaleState = useMemo<States>(() => {
  //   if (isLoadingResales) return States.loading
  //   if (isResalesError) return States.genericError
  //   return States.default
  // }, [isLoadingResales, isResalesError])

  // const getUserStockParameters = (tab: any) =>
  //   new URLSearchParams({
  //     tab,
  //   })

  // const onGoToStockResales = useCallback(() => {
  //   const parameters = getUserStockParameters('resales')

  //   navigate(`${routes.userStock}?${parameters}`)
  // }, [navigate])

  // const userStockResalesURL = `${routes.userStock}?${getUserStockParameters(
  //   'resales',
  // )}`

  return <DashboardContainer stockState={stockState} />
}

Component.displayName = 'Dashboard'
