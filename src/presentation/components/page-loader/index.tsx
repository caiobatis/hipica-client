import { testProps } from '~/tests/testProps'
import { Container, Loading } from './styles'

export function PageLoader() {
  return (
    <Container {...testProps('page-loader')}>
      <Loading>loading</Loading>
    </Container>
  )
}
