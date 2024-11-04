/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'
import { RemoteUseCase } from '~/app/helpers/remote-usecase'
import { ListProducts } from '~/domain/usecases/products'
import { firebaseConfig } from '~/firebase/config'
import { mapProductDTO } from '~/infra/api/mappers/map-product'

// const db = getFirestore(firebaseApp)

const firebase = initializeApp(firebaseConfig)

const database = getDatabase(firebase)

export class RemoteListProducts extends RemoteUseCase<
  ListProducts.Response,
  ListProducts.Parameters
> {
  public run(parameters: ListProducts.Parameters) {
    return useQuery(
      [ListProducts.keys.LIST_PRODUCTS, parameters],
      () => this.service(parameters),
      {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        enabled: parameters.enabled,
      },
    )

    // try {
    //   const response = await getDocs(dbRef)

    //   return response?.docs?.map((document_) => document_.data())
    // } catch (error) {
    //   return error
    // }

    // const documentRef = collection(db, parameters.colection)
    // Variable to store the result of the operation
    // let result = null
    // // Variable to store any error that occurs during the operation
    // let error = null

    // const result = await getDocs(documentRef)

    // console.log('documentRef', documentRef)
    // return result?.docs?.map((document_) => document_.data())
  }

  protected async service(parameters: ListProducts.Parameters) {
    const db = getFirestore(firebase)

    const dbRef = collection(db, parameters.colection)

    const response = await getDocs(dbRef)

    return RemoteListProducts.mapperResponse(
      response?.docs?.map((document_) => document_.data()) as any,
    )
  }

  public static mapperResponse(
    response: ListProducts.ResponseDTO,
  ): ListProducts.Response {
    return response.map((item) => mapProductDTO(item))
  }
}
