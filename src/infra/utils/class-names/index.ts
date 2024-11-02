export function classNames(...parameters: Array<any>): string {
  return parameters
    .flatMap((item): any => {
      if (typeof item === 'object' && item !== null) {
        return classNames(...Object.keys(item).map((key) => !!item[key] && key))
      }

      return item
    })
    .filter(Boolean)
    .join(' ')
}
