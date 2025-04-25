import { LANGUAGES } from 'constants/constants'

export const roundNumber = (num?: number, digits = 2) => {
  if (!num) return 0

  const unit = Math.pow(10, digits)

  return Math.round(num * unit) / unit
}

export const floorNumber = (num?: number, digits = 2) => {
  if (!num) return 0

  const unit = Math.pow(10, digits)

  return Math.floor(num * unit) / unit
}

export const calculateObjectPropertySum = (arrayOfObjects?: any, property?: string) => {
  if (!arrayOfObjects || !property || !arrayOfObjects.length) return 0

  return arrayOfObjects.reduce((acc: number, object: any) => {
    const value = object[property]
    const numberValue = typeof value === 'number' ? value : 0

    return acc + numberValue
  }, 0)
}

export const calculatePercentNumber = (
  total: number | undefined,
  amount: number | undefined,
  digits = 2,
  floor = false,
) => {
  if (!total || !amount) return 0

  const percent = (amount / total) * 100
  return floor ? floorNumber(percent, digits) : roundNumber(percent, digits)
}

export const calculatePercentOf = (
  total: number | undefined,
  percentage: number | undefined,
  digits = 2,
  floor = false,
) => {
  if (!total || !percentage) return 0

  const amount = (percentage * total) / 100
  return floor ? floorNumber(amount, digits) : roundNumber(amount, digits)
}

export const renderPriceFormat = (price?: string | number | null, language = LANGUAGES.de) => {
  if (!price || isNaN(+price)) return '0,00'

  return new Intl.NumberFormat(language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(+price)
}

export const getTwoDigits = (number: number) => {
  return number.toString().padStart(2, '0')
}
