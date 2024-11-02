import type { ErrorContainerProps } from '~/presentation/layouts/error/types'

export const ErrorContainer: React.FC<ErrorContainerProps> = ({
  status,
  message,
  statusText,
}) => {
  return (
    <div>
      <div>
        <p>
          <strong>Error {status || 500}</strong>: {statusText ?? message}
        </p>
      </div>
    </div>
  )
}
