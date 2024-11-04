import type { Timestamp } from 'firebase/firestore'

export interface ProductDTO {
  id: string
  date: Timestamp
  description: string
  title: string
  schedule: {
    school: Array<{
      description: string
      end_time: string
      note: string
      responsible: string
      start_time: string
      title: string
    }>
  }
}
