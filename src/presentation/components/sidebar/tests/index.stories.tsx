import type { Meta, StoryFn } from '@storybook/react'
import { Sidebar } from '~/presentation/components'
import type { SidebarProps } from '~/presentation/components/sidebar/types'

const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    menus: [],
    headerComponent: null,
    footerComponent: null,
  },
} as Meta<typeof Sidebar>

export const Default: StoryFn<SidebarProps> = ({ ...args }) => (
  <Sidebar {...args} />
)

export default meta
