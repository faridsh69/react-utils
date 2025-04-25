import { ENVS } from 'constants/constants'
import { toast } from 'react-toastify'

export const isUndefined = (variable: any): boolean => typeof variable === 'undefined'

export const isNull = (variable: any): boolean => variable === null

export const isArray = (variable: any): boolean => Array.isArray(variable)

// @ts-ignore
export const isProd = () => (window.process ? process?.env?.NODE_ENV === ENVS.production : false)

// @ts-ignore
export const isDev = () => (window.process ? process?.env?.NODE_ENV === ENVS.development : false)

export const isString = (variable: any): boolean => typeof variable === 'string'

export const isNumber = (variable: any): boolean => typeof variable === 'number'

export const isObject = (variable: any): boolean => typeof variable === 'object'

export const isFunction = (variable: any): boolean => typeof variable === 'function'

export const isObjectEmpty = (object: any): boolean =>
  !object || !isObject(object) || !Object.keys(object).length

export const isArrayEmpty = (array: any): boolean => !array || !isArray(array) || !array.length

export const isPressedEnter = (e: any): boolean => e.which === 13

export const isPressedEsc = (e: any): boolean => e.which === 27

export const isInString = (bigString: string, searchWord: string): boolean =>
  bigString?.toLowerCase?.()?.includes(searchWord?.toLowerCase?.())

export const getWindowDimensions = (): { width: number; height: number } => {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height,
  }
}

export const openUrl = (url: string): void => {
  const win = window.open(url, '_blank')
  win?.focus()
}

export const getSnakeCase = (string?: string): string => {
  const result = string ? string.replace(/[A-Z]/g, char => `_${char.toLowerCase()}`) : ''

  return result.replace(/^_/, '')
}

export const getUpperCase = (string?: string): string => {
  return string ? `${string.charAt(0).toUpperCase()}${string.slice(1)}` : ''
}

export const getFormalCase = (string?: string): string => {
  const snakCase = getSnakeCase(string)
  const uppercase = getUpperCase(snakCase)

  return uppercase.replaceAll('_', ' ').replaceAll('.', ' > ')
}

export const convertNullToEmptyString = (string: string | number): string =>
  isNull(string) || isUndefined(string) ? '' : '' + string

export const getOperatingSystem = (): string => {
  const appVersion = window?.navigator?.appVersion || ''
  if (appVersion.indexOf('Win') !== -1) {
    return 'windows'
  }

  if (appVersion.indexOf('Mac') !== -1) {
    return 'macos'
  }

  if (appVersion.indexOf('X11') !== -1) {
    return 'unix'
  }

  if (appVersion.indexOf('Linux') !== -1) {
    return 'linux'
  }

  return 'Not known'
}

export const emptyPromise = () => {
  return new Promise(res => {
    res({ data: {} })
  })
}

export const generateFakeData = (array: any) => {
  const repeatedArray = [...array]

  for (let i = 1; i < 10000; i++) {
    repeatedArray.push({
      label: 'User fake ' + i,
      value: 'Value ' + i,
    })
  }

  return repeatedArray
}

export const getEnumKey = (enumObj: any, value: any) => {
  return Object.keys(enumObj).find(key => enumObj[key] === value)
}

export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
  toast.success(value + ' Copied to clipboard')
}

export const sendEmail = (email: string) => {
  window.open(`mailto:${email}`, '_blank')
}

export const callPhone = (phone: string) => {
  window.open(`tel:${phone}`, '_blank')
}

export const downloadFile = (blob: Blob, fileName: 'Untitled', type = 'application/pdf') => {
  if (!blob || !fileName) return

  const file = new Blob([blob], { type })
  const link = document.createElement('a')

  link.href = URL.createObjectURL(file)
  link.download = fileName
  link.click()
}

export const getUniqueId = (): string => {
  const randomNumber = Math.floor(Math.random() * 1000) + 1

  return 'RAND:' + Date.now() + randomNumber
}
