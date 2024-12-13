/* eslint-disable camelcase */
import { useMutation, useQuery } from '@tanstack/react-query'
import { initializeApp } from 'firebase/app'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore/lite'
import { RemoteUseCase } from '~/app/helpers/remote-usecase'
import {
  Departament,
  ListProducts,
  type UpdateDepartament,
} from '~/domain/usecases/products'
import { firebaseConfig } from '~/firebase/config'
import { mapProductDTO } from '~/infra/api/mappers/map-product'

const firebase = initializeApp(firebaseConfig)

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

export class RemoteDepartament extends RemoteUseCase<
  Departament.Response,
  Departament.Parameters
> {
  public run(parameters: Departament.Parameters) {
    return useQuery(
      [Departament.keys.DEPARTAMENT, parameters],
      () => this.service(parameters),
      {
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        enabled: true,
      },
    )
  }

  protected async service(parameters: Departament.Parameters) {
    const db = getFirestore(firebase)

    // const dbRef = doc(db, `${parameters.colection}/${parameters.id}`)
    const dbRef = doc(db, `${parameters.colection}/${parameters.id}`)

    const response = await getDoc(dbRef)

    return RemoteDepartament.mapperResponse(
      response?.data() as Departament.ResponseDTO,
    )
  }

  public static mapperResponse(
    response: Departament.ResponseDTO,
  ): Departament.Response {
    return mapProductDTO(response)
  }
}

export class RemoteUpdateDepartament extends RemoteUseCase<
  UpdateDepartament.Response,
  UpdateDepartament.Parameters
> {
  public run() {
    return useMutation({
      mutationFn: (parameters: UpdateDepartament.Parameters) => {
        return this.service(parameters)
      },
    })
  }

  protected async service(parameters: UpdateDepartament.Parameters) {
    const db = getFirestore(firebase)

    const dbRef = doc(db, `${parameters.colection}/${parameters.id}`)

    await updateDoc(dbRef, 'scale', parameters.data)

    return
  }
}
