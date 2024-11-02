import { Fragment } from 'react'
import type { LoginContainerProps } from '~/presentation/pages/login/types'
import { Box, Container, InfoLogin, Top } from './styles'

export const LoginContainer: React.FC<LoginContainerProps> = ({ state }) => {
  return (
    <Fragment>
      <Container aria-label="Tela de login" role="region">
        <InfoLogin>
          <Box>
            <Top>
              <p>Faça a gestão do Ton na Mão no seu computador!</p>
              <p>Passo a passo:</p>
            </Top>
          </Box>
        </InfoLogin>
      </Container>
    </Fragment>
  )
}
