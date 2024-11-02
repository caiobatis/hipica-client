export const removeUndefined = <T extends object>(object: T): T =>
  Object.entries(object).reduce((previous, [key, value]) => {
    return value ? { ...previous, [key]: value } : previous
  }, {} as T)
