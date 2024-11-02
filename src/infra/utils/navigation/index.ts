const regExpRoute = /:([A-Z_a-z]+)/g

export const getRoute = (
  rawRoute: string,
  pathParameters: Record<string, string> = {},
  searchParameters: Record<string, string> = {},
) => {
  const rawSearchParameters = new URLSearchParams(searchParameters).toString()

  const mergedRoute = rawRoute.replace(regExpRoute, (_, group1) => {
    const parameter = pathParameters[group1]
    return parameter ?? ''
  })

  return rawSearchParameters
    ? `${mergedRoute}?${rawSearchParameters}`
    : mergedRoute
}
