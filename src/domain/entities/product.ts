export interface Product {
  id: number
  label: string
  departament: string
  director: string
  fields?: Array<string>
  scale: {
    [key: string]: {
      updatedAt?: string
      updatedBy?: string
      event1: string
      event2: string
      es: string
    }
  }
}
