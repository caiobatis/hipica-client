import { useState, type FC } from 'react'
import { States } from '~/presentation/pages/login/types'
import { LoginContainer } from '~/presentation/pages/login/ui'

export const Component: FC = () => {
  const [state, setState] = useState<States>(States.loading)

  return <LoginContainer state={state} />
}

Component.displayName = 'Login'
