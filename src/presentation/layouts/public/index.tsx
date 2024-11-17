import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PublicContainer } from '~/presentation/layouts/public/ui'

export const PublicLayout = () => {
  const navigate = useNavigate()

  const localAuth = !!localStorage.getItem('email')

  useEffect(() => {
    if (!localAuth) {
      navigate('')
    }
  }, [localAuth, navigate])

  return <PublicContainer />
}
