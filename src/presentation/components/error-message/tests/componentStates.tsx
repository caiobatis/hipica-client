import { action } from '@storybook/addon-actions'
import type React from 'react'
import { ErrorMessage } from '~/presentation/components'
import type { ErrorMessageProps } from '~/presentation/components/error-message/types'

const Container: React.FC<ErrorMessageProps> = ({ title, subtitle }) => (
  <ErrorMessage title={title} subtitle={subtitle} />
)

const Default: React.FC = () => (
  <Container
    title="Ops! Algo deu errado"
    subtitle="Não foi possível carregar os dados"
  />
)

const WithImage: React.FC = () => (
  <Container
    title="Ops! Algo deu errado"
    subtitle="Não foi possível carregar os dados"
    image="emoji-warning"
  />
)

const WithTryAgainFunction: React.FC = () => (
  <Container
    title="Ops! Algo deu errado"
    subtitle="Não foi possível carregar os dados"
    onTryAgain={() => action('onTryAgain')}
  />
)

const WithLinesInSubtitle: React.FC = () => (
  <Container
    title="Ops! Algo deu errado"
    subtitle={`Não foi possível carregar os dados\nTente novamente mais tarde`}
  />
)

export { Default, WithImage, WithLinesInSubtitle, WithTryAgainFunction }
