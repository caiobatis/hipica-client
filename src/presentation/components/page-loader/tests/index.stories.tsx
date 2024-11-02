import type { Meta, StoryFn } from '@storybook/react'
import { PageLoader } from '~/presentation/components'

const meta = {
  title: 'components/Page Loader',
  component: PageLoader,
  parameters: {},
  tags: ['autodocs'],
} as Meta<typeof PageLoader>

export const Default: StoryFn = () => <PageLoader />

export default meta
