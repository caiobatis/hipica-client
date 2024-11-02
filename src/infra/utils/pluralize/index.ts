export type PluralizeParameters = {
  zero?: string
  singular: string
  plural: string
}

export const pluralize = (
  value: number,
  parameters: PluralizeParameters,
): string => {
  if (value === 0 && parameters.zero) return parameters.zero
  if (Math.abs(value) === 1) return `${value} ${parameters.singular}`
  return `${value} ${parameters.plural}`
}
