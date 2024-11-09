import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrivateContainer } from '~/presentation/layouts/private/ui'

export const PrivateLayout = () => {
  const navigate = useNavigate()

  const localAuth = !!localStorage.getItem('email')

  useEffect(() => {
    if (!localAuth) {
      navigate('')
    }
  }, [localAuth, navigate])

  return (
    <div>
      <PrivateContainer
        user={{
          name: 'Caio',
          email: 'a@a.c',
        }}
        onGoToHome={() => null}
        onGoToTransferProduct={() => null}
        onSignOut={() => null}
      />
    </div>
  )
}
