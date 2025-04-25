import { ChangeEvent } from 'react'
import { FORM_GROUP_ADD, FORM_NO_LABEL } from 'components/Form/Form.constants'
import { LANGUAGES } from 'constants/constants'
import { InputTextMasksEnum } from 'enums/enums'

import { convertNullToEmptyString, getFormalCase, isNull, isNumber, isUndefined } from './helpers'

export const submitFormId = (formId: string, delay = 0): void => {
  setTimeout(() => {
    document.getElementById(formId)?.click()
  }, delay)
}

export const submitFormIds = (formIds: string[], delay = 0): void => {
  formIds.forEach(formId => {
    submitFormId(formId, delay)
  })
}

export const removeObjectAttributes = (object: any, attributes: string[]) => {
  const newObj = Object.fromEntries(
    Object.entries(object).filter(([key]) => !attributes.includes(key)),
  )

  return newObj
}

const getNumberFromString = (string: string): number => {
  const output = Number(string)

  if (isNaN(output)) return 0

  return output
}

const getFloatFromString = (string: string): number => {
  if (string.endsWith('.')) {
    return string as any
  }

  const output = Number(string)

  if (isNaN(output)) return 0

  return output
}

const getNumberSeparators = (language: string) => {
  const isDe = language === LANGUAGES.de

  return {
    decimalSeparator: isDe ? ',' : '.',
    thousandSeparator: isDe ? '.' : ',',
    cleaningRegex: isDe ? /\./g : /,/g,
  }
}

const getPriceFromString = (value: string, language: string): string => {
  const { decimalSeparator, thousandSeparator } = getNumberSeparators(language)

  if (!value || value.trim() === '') return ''
  // || isNaN(Number(value))

  let [integerPart, decimalPart] = value.split('.')

  if (isNaN(Number(integerPart))) return ''

  const threeDigitsRegex = /(\d+)(\d{3})/
  while (threeDigitsRegex.test(integerPart)) {
    integerPart = integerPart.replace(threeDigitsRegex, '$1' + thousandSeparator + '$2')
  }

  if (decimalPart !== undefined) {
    decimalPart = decimalPart.replace(/[^0-9]/g, '')
    decimalPart = decimalPart.substring(0, 2)
  }

  if (value.slice(-1) === '.' && decimalSeparator === ',') {
    return `${integerPart}${decimalSeparator}`
  }

  return decimalPart !== undefined ? `${integerPart}${decimalSeparator}${decimalPart}` : integerPart
}

const getNumberFromPriceString = (value: string, language: string): string | number => {
  const { cleaningRegex } = getNumberSeparators(language)

  if (value === '' || isNull(value) || isUndefined(value)) return ''

  const pureNumber = value.replace(/[^0-9.,]/g, '').replace(cleaningRegex, '')

  if (pureNumber === '.' || pureNumber === '') return pureNumber

  const output = pureNumber.replace(/,/g, '.')

  return Number(output)
}

export const getClientInputValue = (value: string | number, mask: string): string => {
  const output = convertNullToEmptyString(value)

  if (mask === InputTextMasksEnum.PriceEn) return getPriceFromString(output, LANGUAGES.en)
  if (mask === InputTextMasksEnum.PriceDe) return getPriceFromString(output, LANGUAGES.de)

  return output
}

export const getServerInputValue = (
  e: ChangeEvent<HTMLInputElement>,
  mask: InputTextMasksEnum,
): string | number => {
  const value = e.target.value

  if (mask === InputTextMasksEnum.PriceEn) return getNumberFromPriceString(value, LANGUAGES.en)
  if (mask === InputTextMasksEnum.PriceDe) return getNumberFromPriceString(value, LANGUAGES.de)
  if (mask === InputTextMasksEnum.Number) return getNumberFromString(value)
  if (mask === InputTextMasksEnum.Float) return getFloatFromString(value)

  return value
}

export const getFilterValueOfBoolean = (bool: boolean): string => {
  return bool === true ? 'Yes' : bool === false ? 'No' : ''
}

export const isFilterActive = (value: any): boolean => {
  return !isUndefined(value) && !!value
}

export const getObjectWithEmptyStringValues = (object: any) => {
  return Object.fromEntries(Object.keys(object).map(key => [key, '']))
}

export const getLabelOfInputs = (name: string, label?: string): string => {
  return label === FORM_NO_LABEL ? '' : label || getFormalCase(name)
}

export const getFilterValueSelect = (value: any, multiple: boolean, options: any[]): string => {
  const valueLength = value?.length || 0
  const filterValue = multiple
    ? valueLength
      ? `${valueLength} item${valueLength > 1 ? 's' : ''}`
      : ''
    : options.find(o => o.value === value)?.label

  return filterValue
}

export const getGroupInputName = (inputObject: object): string => {
  return Object.keys(inputObject)[0]
}

export const getGroupFieldName = (inputObject: object): string => {
  const inputName = getGroupInputName(inputObject)

  if (!inputName) return ''

  const lastDotPosition = inputName.lastIndexOf('.')

  return inputName.substring(lastDotPosition + 1)
}

export const getGroupFieldIndex = (inputName: string): number => {
  if (!inputName) return 0

  const firstDotPosition = inputName.indexOf('.')
  const lastDotPosition = inputName.lastIndexOf('.')

  const index = inputName.substring(firstDotPosition + 1, lastDotPosition)

  return index !== '' ? +index : 0
}

export const onChangeInputInGroup = (p: any, inputObject: any, groupName: string) => {
  const inputName = getGroupInputName(inputObject)
  const inputValue = inputObject[inputName]

  if (inputName === groupName) {
    if (inputValue === FORM_GROUP_ADD) {
      const groupRows = p[groupName] || []
      return {
        ...p,
        [groupName]: [...groupRows, {}],
      }
    }

    // remove record index
    return {
      ...p,
      [groupName]: p[groupName].filter((_: any, index: number) => index !== inputValue),
    }
  }

  const groupFieldIndex = getGroupFieldIndex(inputName)
  if (isNumber(groupFieldIndex)) {
    const groupFieldName = getGroupFieldName(inputObject)

    return {
      ...p,
      [groupName]: p[groupName].map((row: any, rowIndex: number) => {
        return {
          ...row,
          [groupFieldName]: rowIndex === groupFieldIndex ? inputValue : row[groupFieldName],
        }
      }),
    }
  }

  return {
    ...p,
    ...inputObject,
  }
}
