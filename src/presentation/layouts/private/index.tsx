import { PrivateContainer } from '~/presentation/layouts/private/ui'

export const PrivateLayout = () => {
  return (
    <div>
      <PrivateContainer
        user={{
          name: 'Caio',
          email: 'a@a.c',
        }}
        onGoToHome={() => null}
        onGoToTransferProduct={() => null}
        onSignOut={() => null}
      />
    </div>
  )
}
