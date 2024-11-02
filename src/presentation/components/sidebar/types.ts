import type { ReactNode } from 'react'
import type { FeatureFlag } from '~/infra/store/useGlobalStore/store/feature-flags'
import type { IconId } from '~/presentation/components/icon/types'

export interface SidebarBarMenu {
  label: string
  linkTo: string
  leadingIcon: IconId
  featureFlags?: Array<FeatureFlag>
}

export interface SidebarProps {
  menus: Array<SidebarBarMenu>
  headerComponent: ReactNode
  footerComponent: ReactNode
}
