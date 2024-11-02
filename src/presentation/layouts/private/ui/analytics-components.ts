import { withAnalytics } from '~/infra/hocs'
import { SignOutModal } from '~/presentation/layouts/private/ui/components'

export const AnalyticSignOutModal = withAnalytics(SignOutModal, 'modal')
