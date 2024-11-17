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

  return <PrivateContainer />
}
