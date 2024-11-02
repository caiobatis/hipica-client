export interface PaginatedItems<T> {
  metadata: {
    nextPage: number | null
    pageSize: number
    currentPage: number
  }
  data: Array<T>
}
