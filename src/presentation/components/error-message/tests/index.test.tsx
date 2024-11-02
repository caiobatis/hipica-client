import {
  fireEvent,
  render,
  screen,
  type RenderResult,
} from '@testing-library/react'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { ErrorMessage } from '~/presentation/components'
import type { ErrorMessageProps } from '~/presentation/components/error-message/types'
import { testSnapshots } from '~/tests/utils'
import * as states from './componentStates'

mockJadeComponents()

const defaultProps: ErrorMessageProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  onTryAgain: (): void => undefined,
}

const makeSut = (props: Partial<ErrorMessageProps> = {}): RenderResult => {
  return render(<ErrorMessage {...defaultProps} {...props} />)
}
describe('ErrorMessage', (): void => {
  testSnapshots(states)

  let component: RenderResult

  afterAll(() => {
    component.unmount()
  })

  it('should call onTryAgain on click', () => {
    const onTryAgain = vi.fn()

    component = makeSut({
      onTryAgain,
    })

    const button = screen.getByTestId('btn-try-again')

    fireEvent.click(button)

    expect(onTryAgain).toHaveBeenCalled()
  })
})
