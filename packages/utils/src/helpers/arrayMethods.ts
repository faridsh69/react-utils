import { SORTING_METHODS } from 'constants/constants'

export const getUniqueArray = <T>(array: T[]): T[] => {
  const arrayOfJsons = array.map(item => JSON.stringify(item))

  return array.filter((item, index) => arrayOfJsons.indexOf(JSON.stringify(item)) === index)
}

export const getUniqueArrayByPropery = <T>(array: T[], property: keyof T): T[] => {
  const arrayOfProperty = array.map((item: T) => item[property])

  return array.filter((item, index) => arrayOfProperty.indexOf(item[property]) === index)
}

export const sortArray = <T>(array: T[], property: keyof T, order = SORTING_METHODS.asc): T[] => {
  return (
    array?.sort(
      (a: any, b: any) => (a[property] - b[property]) * (order === SORTING_METHODS.asc ? 1 : -1),
    ) || []
  )
}

export const getReorderedPositions = <T extends { position: number }>(
  list: T[],
  movedItem: T,
  oldPosition: number,
  newPosition: number,
) => {
  if (!list) return list

  const minPos = Math.min(oldPosition, newPosition)
  const maxPos = Math.max(oldPosition, newPosition)
  const movedDown = minPos === oldPosition

  const updatedPositionsList = list.map((item: any) => {
    if (item.position < minPos || item.position > maxPos) {
      return item
    }

    // @ts-ignore
    if (item.id === movedItem.id) {
      return {
        ...item,
        position: newPosition,
      }
    }

    return {
      ...item,
      position: item.position + (movedDown ? -1 : 1),
    }
  })

  return sortArray<T>(updatedPositionsList, 'position', SORTING_METHODS.asc)
}
