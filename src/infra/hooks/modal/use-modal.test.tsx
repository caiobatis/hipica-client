import { renderHook } from '@testing-library/react'
import { Fragment } from 'react/jsx-runtime'
import { describe, expect, it, vi } from 'vitest'
import { useModal } from './use-modal'

const mockShowModal = vi.fn()
const mockHideModal = vi.fn()

vi.mock('~/infra/store', () => {
  return {
    useGlobalStore: () => ({
      showModal: mockShowModal,
      hideModal: mockHideModal,
    }),
  }
})

const makeSut = () => {
  const { result } = renderHook(() => useModal())
  return result
}

describe('useModal', () => {
  it('should call showModal', () => {
    const { current } = makeSut()

    current.show(() => <Fragment />)

    expect(mockShowModal).toHaveBeenCalled()
  })

  it('should call hideModal', () => {
    const { current } = makeSut()

    current.hide()

    expect(mockHideModal).toHaveBeenCalled()
  })
})
