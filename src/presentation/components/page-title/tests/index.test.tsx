import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { PageTitle } from '~/presentation/components'
import type { PageTitleProps } from '~/presentation/components/page-title/types'
import { render, type RenderResult } from '~/tests'
import { testSnapshots } from '~/tests/utils'
import * as states from './componentStates'

mockJadeComponents()

const defaultProps: PageTitleProps = {
  title: 'Title',
}

const makeSut = (props: Partial<PageTitleProps> = {}): RenderResult => {
  return render(<PageTitle {...defaultProps} {...props} />)
}

describe('PageTitle', (): void => {
  testSnapshots(states)

  let component: RenderResult

  beforeAll(() => {
    document.title = 'Previous'
  })

  afterAll(() => {
    component.unmount()
  })

  it('should update document title on mount', () => {
    component = makeSut({ title: 'Title' })

    expect(document.title).toBe('Title - Previous')
  })

  it('should undo document title changes on unmount', () => {
    component = makeSut({ title: 'Title' })

    component.unmount()

    expect(document.title).toBe('Previous')
  })
})
