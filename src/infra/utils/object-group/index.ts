type ObjectWithStringValues<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}

export type GroupedItem<T> = {
  label: string
  data: Array<T>
}

/**
 * This function filters all objects in an array by search in specific keys.
 * @param items the array itself
 * @param key the keys used for group
 * @returns the filtered items
 */
export function objectGroup<T>(
  items: Array<T>,
  key: ObjectWithStringValues<T>[keyof T],
): Array<GroupedItem<T>> {
  const groups = items.reduce(
    (previous, current) => {
      const groupKey = current[key] as string

      if (!previous[groupKey]) {
        previous[groupKey] = []
      }

      previous[groupKey].push(current)

      return previous
    },
    {} as Record<string, Array<T>>,
  )

  return Object.entries(groups).map(([label, data]) => ({ label, data }))
}
