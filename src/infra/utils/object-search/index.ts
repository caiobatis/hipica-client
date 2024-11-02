type ObjectWithStringValues<T> = {
  [K in keyof T]: T[K] extends string | null | undefined ? K : never
}

/**
 * This function filters all objects in an array by search in specific keys.
 * @param items the array itself
 * @param keys the keys where 'search' will be checked on
 * @param search the search text
 * @param exact default false, if true, the search must be exactly equal the value in a given key.
 * @returns the filtered items
 */
export function objectSearch<T>(
  items: Array<T>,
  keys: Array<ObjectWithStringValues<T>[keyof T]>,
  search: string,
  exact: boolean = false,
): Array<T> {
  const parsedSearch = search.toLowerCase()

  return items.filter((item) => {
    for (const searchKey of keys) {
      let keyValue = item[searchKey] as string | null
      if (!keyValue) continue

      keyValue = keyValue.toLowerCase()

      if (exact && keyValue === parsedSearch) {
        return true
      }

      if (keyValue.includes(parsedSearch)) {
        return true
      }
    }

    return false
  })
}
