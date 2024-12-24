export interface ProductDTO {
  id: number
  label: string
  departament: string
  director: string
  fields?: Array<{
    value: string
    id: string | number
  }>
  scale: {
    [key: string]: {
      updatedAt?: string
      updatedBy?: string
      fields: {
        [key: string]: string
      }
    }
  }
}
