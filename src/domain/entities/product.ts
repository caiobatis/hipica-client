export interface Product {
  id: string
  model: string
  status: string
  partnerName: string
  productName: string
  displayName: string
  customerId: string | null
  orderNumber: string | null
  serialNumber: string
  imageUrl: string
  updatedAt: string
  createdAt: string
}
