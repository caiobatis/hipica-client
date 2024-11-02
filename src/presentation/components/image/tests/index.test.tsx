import { afterAll, describe, expect, it } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { Image } from '~/presentation/components'
import type { ImageProps } from '~/presentation/components/image/types'
import { fireEvent, render, type RenderResult } from '~/tests'
import { testSnapshots } from '~/tests/utils'
import * as states from './componentStates'

mockJadeComponents()

const defaultProps: ImageProps = {
  alt: 'alt',
  height: 100,
  source: 'ton-logo.svg',
  width: 100,
}

const makeSut = (props: Partial<ImageProps> = {}): RenderResult => {
  return render(<Image {...defaultProps} {...props} />)
}

describe('Image', (): void => {
  testSnapshots(states)

  let component: RenderResult

  afterAll(() => {
    component.unmount()
  })

  it('should render image', () => {
    component = makeSut({ source: '123', title: 'image' })

    const image = component.queryByTitle('image')

    expect(image).toBeInTheDocument()
  })

  it('should render without source', () => {
    component = makeSut({ source: undefined })

    const fallback = component.queryByTestId('component-fallback')

    expect(fallback).toBeInTheDocument()
  })

  it('should render with borderRadius container', () => {
    component = makeSut({
      borderRadius: 'container',
      source: '123',
      title: 'image',
    })

    const image = component.getByRole('img')

    expect(image).toBeInTheDocument()
  })

  it('should render with onError action', () => {
    component = makeSut({ source: '123', title: 'image' })

    const image = component.getByTitle('image')

    // Fakes an error event
    fireEvent.error(image)

    expect(image).not.toBeInTheDocument()
  })
})
