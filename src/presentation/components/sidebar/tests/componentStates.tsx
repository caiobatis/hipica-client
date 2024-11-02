import type React from 'react'
import { Sidebar } from '~/presentation/components'

const Container: React.FC = () => (
  <Sidebar headerComponent={null} footerComponent={null} menus={[]} />
)

const Default: React.FC = () => <Container />

export { Default }
