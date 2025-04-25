import { _TABLE_NO_DATA } from 'components/Table/Table.constants'
import { ColorsEnum } from 'enums/enums'

import { getTwoDigits } from './calculationHelpers'

export const getGermanDate = (date?: Date | string | number | null) => {
  if (!date) return ''

  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = getTwoDigits(dateObject.getMonth() + 1)
  const day = getTwoDigits(dateObject.getDate())
  const germanDate = `${day}.${month}.${year}`

  return germanDate
}

export const getServerDate = (date?: Date | string | number | null) => {
  if (!date) return ''

  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = getTwoDigits(dateObject.getMonth() + 1)
  const day = getTwoDigits(dateObject.getDate())

  const serverDate = `${year}-${month}-${day}`

  return serverDate
}

export const getRelativeTime = (dateString: string | number | null) => {
  if (!dateString) return _TABLE_NO_DATA

  const givenDate = new Date(dateString)
  const today = new Date()

  givenDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  // @ts-ignore
  const diffTime = givenDate - today

  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays === -1) return 'Yesterday'
  if (diffDays > 0) return `In ${diffDays} days`

  return `${Math.abs(diffDays)} days ago`
}

export const getDiffTimeColor = (dateString: string | number | null) => {
  if (!dateString) return ColorsEnum.Blue

  const givenDate = new Date(dateString)
  const today = new Date()

  givenDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  // @ts-ignore
  const diffTime = givenDate - today

  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return ColorsEnum.Blue
  if (diffDays > 0) return ColorsEnum.Green

  return ColorsEnum.Red
}

export const getDaysAfter = (date = getServerDate(new Date()), days = 0): string => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)

  const year = newDate.getFullYear()
  const month = getTwoDigits(newDate.getMonth() + 1)
  const day = getTwoDigits(newDate.getDate())

  return `${year}-${month}-${day}`
}
