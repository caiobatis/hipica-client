import { testProps } from '~/tests/testProps'
import { ButtonTryAgain, Container, Subtitle, Title } from './styles'
import type { ErrorMessageProps } from './types'

export function ErrorMessage({
  title,
  image = 'emoji-warning',
  subtitle,
  onTryAgain,
}: ErrorMessageProps) {
  return (
    <Container>
      <img src={`/assets/images/${image}.svg`} alt={image} />
      <Title variant="heading-medium">{title}</Title>
      <Subtitle variant="text-medium" color="medium">
        {subtitle}
      </Subtitle>
      {onTryAgain && (
        <ButtonTryAgain
          variant="primary-solid"
          onClick={onTryAgain}
          {...testProps('btn-try-again')}
        >
          Tentar novamente
        </ButtonTryAgain>
      )}
    </Container>
  )
}
