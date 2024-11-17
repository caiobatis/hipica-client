import {
  RemoteDepartament,
  RemoteListProducts,
  RemoteUpdateDepartament,
} from '~/app/usecases'
import type { Departament, ListProducts } from '~/domain/usecases/products'

export const useListProducts = (parameters: ListProducts.Parameters) => {
  const listProducts = new RemoteListProducts()
  return listProducts.run(parameters)
}

export const useDepartament = (parameters: Departament.Parameters) => {
  const listProducts = new RemoteDepartament()
  return listProducts.run(parameters)
}

export const useUpdateDepartament = () => {
  const listProducts = new RemoteUpdateDepartament()
  return listProducts.run()
}
