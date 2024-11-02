import type { Meta, StoryFn } from '@storybook/react'
import { Image } from '~/presentation/components'
import type { ImageProps } from '~/presentation/components/image/types'

const meta = {
  title: 'components/Image',
  component: Image,
  parameters: {},
  tags: ['autodocs'],
  args: {
    alt: 'alt',
    height: 100,
    source: '/assets/images/ton-logo.svg',
    width: 100,
    borderRadius: 'container',
    fit: 'cover',
  },
} as Meta<typeof Image>

export const Default: StoryFn<ImageProps> = ({ ...args }) => <Image {...args} />

export default meta
