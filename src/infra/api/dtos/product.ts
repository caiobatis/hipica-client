export interface ProductDTO {
  id: string
  model: string
  status: string
  partner: string
  product: string
  customer_id: string | null
  order_number: string | null
  product_image: string
  serial_number: string
  updated_at: string
  created_at: string
}
