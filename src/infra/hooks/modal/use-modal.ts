import { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { ModalRender, UseModalReturn } from '~/infra/hooks/modal/types'
import { useGlobalStore } from '~/infra/store'

export const useModal = (): UseModalReturn => {
  const { showModal, hideModal } = useGlobalStore((state) => state)

  const show = useCallback(
    (modalConstructor: ModalRender) => {
      const modalId = uuidv4()
      const toggleModal = () => hideModal()

      const modalElement = modalConstructor({ id: modalId, toggleModal })

      showModal({ id: modalId, content: modalElement })
    },
    [showModal, hideModal],
  )

  const hide = useCallback(() => {
    hideModal()
  }, [hideModal])

  return {
    show,
    hide,
  }
}
