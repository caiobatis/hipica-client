import type { Product } from '~/domain/entities'
import type { ProductDTO } from '~/infra/api/dtos'
import { snakeToTitleCase } from '~/infra/utils/case-converters'

export function mapProductDTO(product: ProductDTO): Product {
  return {
    id: product.id,
    model: product.model,
    status: product.status,
    partnerName: product.partner,
    productName: product.product,
    displayName: snakeToTitleCase(product.product),
    customerId: product.customer_id,
    orderNumber: product.order_number,
    serialNumber: product.serial_number,
    imageUrl: product.product_image,
    updatedAt: product.updated_at,
    createdAt: product.created_at,
  }
}
