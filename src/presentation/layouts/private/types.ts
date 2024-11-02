export interface PrivateContainerProps {
  user: {
    name: string
    email: string
  }
  onGoToTransferProduct: () => void
  onGoToHome: () => void
  onSignOut: () => void
}
