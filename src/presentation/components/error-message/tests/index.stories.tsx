import { action } from '@storybook/addon-actions'
import type { Meta, StoryFn } from '@storybook/react'
import { ErrorMessage } from '~/presentation/components'
import type { ErrorMessageProps } from '~/presentation/components/error-message/types'

const meta = {
  title: 'components/ErrorMessage',
  component: ErrorMessage,
  parameters: {},
  tags: ['autodocs'],
  args: {
    title: 'Ops! Algo deu errado',
    image: 'emoji-warning',
    subtitle: 'Não foi possível carregar os dados',
    onTryAgain: () => action('onTryAgain'),
  },
} as Meta<typeof ErrorMessage>

export const Default: StoryFn<ErrorMessageProps> = ({ ...args }) => (
  <ErrorMessage {...args} />
)

export default meta
