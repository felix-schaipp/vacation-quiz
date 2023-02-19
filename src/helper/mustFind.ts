export const mustFind = <T>(array: T[], predicate: (item: T) => boolean): T => {
  const foundItem = array.find(predicate)

  if (!foundItem) throw new Error(`No item found for predicate ${predicate.toString()}`)

  return foundItem
}
