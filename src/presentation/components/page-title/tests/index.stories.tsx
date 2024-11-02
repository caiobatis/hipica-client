import type { Meta, StoryFn } from '@storybook/react'
import { PageTitle } from '~/presentation/components'

const meta = {
  title: 'components/PageTitle',
  component: PageTitle,
  parameters: {},
  tags: ['autodocs'],
} as Meta<typeof PageTitle>

export const Default: StoryFn = () => <PageTitle title="Title" />

export default meta
