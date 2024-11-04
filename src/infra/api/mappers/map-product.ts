import type { Product } from '~/domain/entities'
import type { ProductDTO } from '~/infra/api/dtos'

export function mapProductDTO(product: ProductDTO): Product {
  return product
}
