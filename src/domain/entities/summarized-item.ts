import type { SummaryItem } from '~/domain/entities'

export interface SummarizedItem<ItemT, SummaryT extends string = string> {
  summary: Record<SummaryT, Array<SummaryItem>>
  data: Array<ItemT>
}
