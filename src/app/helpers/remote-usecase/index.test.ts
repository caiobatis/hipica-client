/* eslint-disable camelcase */
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { RemoteUseCase } from '~/app/helpers/remote-usecase'

describe('RemoteUseCase', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should map response to camel case by default', () => {
    const parsedResponse = RemoteUseCase.mapperResponse({
      hello_there: 'Hello World!',
    })

    expect(parsedResponse).toEqual({ helloThere: 'Hello World!' })
  })

  it('should return undefined if response is nullish', () => {
    const parsedResponse = RemoteUseCase.mapperResponse()

    expect(parsedResponse).toEqual(undefined)
  })
})
