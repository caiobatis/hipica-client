import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PageProps } from '~/presentation/pages/auth/types'
import { DashboardContainer } from '~/presentation/pages/auth/ui'

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSetAuth = useCallback(() => {
    localStorage.setItem('email', email)

    setTimeout(() => {
      navigate('/evento')
    }, 200)
  }, [email, navigate])

  const localAuth = !!localStorage.getItem('email')

  useEffect(() => {
    if (localAuth) {
      navigate('/evento')
    }
  }, [localAuth, navigate])

  return (
    <DashboardContainer
      email={email}
      setEmail={setEmail}
      setAuth={handleSetAuth}
    />
  )
}

Component.displayName = 'Auth'
