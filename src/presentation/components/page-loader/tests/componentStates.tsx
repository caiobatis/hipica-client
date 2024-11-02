import type React from 'react'
import { PageLoader } from '~/presentation/components'

const Container: React.FC = () => <PageLoader />

const Default: React.FC = () => <Container />

export { Default }
