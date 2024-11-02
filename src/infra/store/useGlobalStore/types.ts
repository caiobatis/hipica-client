import type { DefectOnArrivalSlice } from '~/infra/store/useGlobalStore/store/defect-on-arrival'
import type { FeatureFlagsSlice } from '~/infra/store/useGlobalStore/store/feature-flags'
import type { InProgressTransferSlice } from '~/infra/store/useGlobalStore/store/in-progress-transfer'
import type { ModalSlice } from '~/infra/store/useGlobalStore/store/modal'
import type { ToastSlice } from '~/infra/store/useGlobalStore/store/toast'

export interface AllSlices
  extends Partial<ModalSlice>,
    Partial<ToastSlice>,
    Partial<InProgressTransferSlice>,
    Partial<FeatureFlagsSlice>,
    Partial<DefectOnArrivalSlice> {
  reset: () => void
}

export type GlobalStore = AllSlices &
  InProgressTransferSlice &
  ModalSlice &
  ToastSlice &
  FeatureFlagsSlice &
  DefectOnArrivalSlice
