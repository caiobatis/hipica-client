/* eslint-disable camelcase */
import MockAdapter from 'axios-mock-adapter'
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { RemoteListProducts } from '~/app/usecases'
import {
  listProductsDTOMock,
  listProductsMock,
} from '~/app/usecases/products/mocks'
import type { ListProducts } from '~/domain/usecases'
import { axios } from '~/infra/api'
import { URLs } from '~/infra/api/constants'
import { renderHook, waitFor } from '~/tests'

const apiMock = new MockAdapter(axios)

const defaultParameters: ListProducts.ParametersDTO = {
  status: 'GOOD',
  order_number: '123',
}

apiMock.onGet(`${URLs.default}/`).reply(200, listProductsDTOMock)

class RemoteListProductsTest extends RemoteListProducts {
  public applyParametersDTO(parameters: ListProducts.Parameters) {
    return super.applyParametersDTO(parameters)
  }

  public async service(parameters: ListProducts.Parameters) {
    return super.service(parameters)
  }
}

const instance = new RemoteListProductsTest('/')

describe('RemoteListProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    apiMock.reset()
  })

  it('should map response', () => {
    const response = RemoteListProductsTest.mapperResponse(listProductsDTOMock)

    expect(response).toEqual(listProductsMock)
  })

  it('should apply dto in parameters', () => {
    const parameters = instance.applyParametersDTO({
      enabled: true,
      orderNumber: '123',
      status: 'BAD',
    })

    expect(parameters).toEqual({
      order_number: '123',
      status: 'BAD',
    })
  })

  it('should apply dto in parameters by default', () => {
    const parameters = instance.applyParametersDTO({})

    expect(parameters).toEqual({
      status: 'GOOD',
    })
  })

  describe('when call run method', () => {
    it('should return a list of movement orders', async () => {
      const { result } = renderHook(() => instance.run({}))

      await waitFor(() => {
        expect(result.current.data).toEqual(listProductsMock)
      })
    })

    it('should return a list of movement orders when has params', async () => {
      apiMock
        .onGet(`${URLs.default}/`, {
          params: defaultParameters,
        })
        .reply(200, listProductsDTOMock)

      const { result } = renderHook(() => instance.run(defaultParameters))

      await waitFor(() => {
        expect(result.current.data).toEqual(listProductsMock)
      })
    })
  })
})
