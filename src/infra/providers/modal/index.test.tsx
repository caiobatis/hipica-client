import { afterAll, describe, expect, it, vi } from 'vitest'
import { mockJadeComponents } from '~/infra/mocks'
import { ModalProvider } from '~/infra/providers/modal'
import { render, type RenderResult } from '~/tests'

mockJadeComponents()

const mockHideModal = vi.fn()

const makeSut = (): RenderResult => {
  return render(<ModalProvider />)
}

vi.mock('~/infra/store', () => {
  return {
    useGlobalStore: () => ({
      modal: {
        visible: false,
        title: 'Title',
      },
      hideModal: mockHideModal,
    }),
  }
})

describe('providers/ModalProvider', () => {
  let component: RenderResult

  afterAll(() => {
    component.unmount()
  })

  it('should render correctly', (): void => {
    component = makeSut()
    expect(component.container).toBeInTheDocument()
  })
})
