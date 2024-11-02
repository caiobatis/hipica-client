/* eslint-disable camelcase */
import { useQuery } from '@tanstack/react-query'
import { RemoteUseCase } from '~/app/helpers/remote-usecase'
import { ListProducts } from '~/domain/usecases/products'
import { axios } from '~/infra/api'
import { URLs } from '~/infra/api/constants'
import { mapProductDTO } from '~/infra/api/mappers/map-product'

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
  }

  protected async service(parameters: ListProducts.Parameters) {
    const { data } = await axios.get<ListProducts.ResponseDTO>(
      `${URLs.default}${this.url}`,
      {
        params: this.applyParametersDTO(parameters),
      },
    )

    return RemoteListProducts.mapperResponse(data)
  }

  protected applyParametersDTO(
    parameters: ListProducts.Parameters,
  ): ListProducts.ParametersDTO {
    return {
      status: parameters.status ?? 'GOOD',
      order_number: parameters.orderNumber,
    }
  }

  public static mapperResponse(
    response: ListProducts.ResponseDTO,
  ): ListProducts.Response {
    return {
      summary: {
        byProduct: response.summary.by_product,
        byStatus: response.summary.by_status,
      },
      data: response.data.map((item) => mapProductDTO(item)),
    }
  }
}
