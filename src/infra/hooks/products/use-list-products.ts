import { RemoteListProducts } from '~/app/usecases'
import type { ListProducts } from '~/domain/usecases/products'

export const useListProducts = (parameters: ListProducts.Parameters) => {
  const listProducts = new RemoteListProducts('/workfinity/terminals')
  return listProducts.run(parameters)
}
