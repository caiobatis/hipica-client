import { useRouteError } from 'react-router-dom'
import type { ErrorContainerProps } from '~/presentation/layouts/error/types'
import { ErrorContainer } from '~/presentation/layouts/error/ui'

export const ErrorLayout = () => {
  const error = useRouteError() as ErrorContainerProps

  return (
    <ErrorContainer
      message={error.message}
      status={error.status}
      statusText={error.statusText}
    />
  )
}
