import camelcaseKeys from 'camelcase-keys'

export abstract class RemoteUseCase<
  Response extends object | void,
  Parameters extends object | undefined = undefined,
> {
  public constructor(protected readonly url?: string) {}

  public abstract run(parameters: Parameters): unknown

  protected abstract service(parameters: Parameters): Promise<Response>

  protected applyParametersDTO?(parameters: Parameters): unknown

  public static mapperResponse(response?: object): unknown {
    if (!response) return undefined

    return camelcaseKeys(response as Record<string, unknown>, { deep: true })
  }
}
