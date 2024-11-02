import { useMemo } from 'react'
import { usefulLinks } from '~/presentation/pages/useful-links/ui/constants'
import type { PageProps } from './types'
import { UsefulLinksContainer } from './ui'

export const Component: React.FC<PageProps> = () => {
  const usefulLinksArray = useMemo(() => Object.values(usefulLinks), [])

  return <UsefulLinksContainer usefulLinks={usefulLinksArray} />
}

Component.displayName = 'UsefulLinks'
