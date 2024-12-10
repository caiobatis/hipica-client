export interface ProductDTO {
  id: number
  label: string
  departament: string
  director: string
  fields?: Array<string>
  scale: {
    [key: string]: {
      updatedAt?: string
      updatedBy?: string
    }
  }
}
