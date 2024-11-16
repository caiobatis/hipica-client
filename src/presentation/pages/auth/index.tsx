import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PageProps } from '~/presentation/pages/auth/types'
import { DashboardContainer } from '~/presentation/pages/auth/ui'

const emailRegex = /^[\d.a-z]+@[\da-z]+\.[a-z]+(\.[a-z]+)?$/i

export const Component: React.FC<PageProps> = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSetAuth = useCallback(() => {
    if (email) {
      if (!emailRegex.test(email)) {
        setError('Digite um e-mail válido')
        return
      }

      localStorage.setItem('email', email)

      setTimeout(() => {
        navigate('/departamento')
      }, 200)

      return
    }
    setError('Digite um e-mail')
  }, [email, navigate])

  const localAuth = !!localStorage.getItem('email')

  useEffect(() => {
    if (localAuth) {
      setError('')
      navigate('/departamento')
    }
  }, [localAuth, navigate])

  return (
    <DashboardContainer
      email={email}
      setEmail={setEmail}
      setAuth={handleSetAuth}
      error={error}
    />
  )
}

Component.displayName = 'Auth'
