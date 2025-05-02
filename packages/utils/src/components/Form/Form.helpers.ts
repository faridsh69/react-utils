import { ChangeEvent } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { LANGUAGES } from 'constants/constants'
import {
  ColorsEnum,
  IconsEnum,
  InputComponentsEnum,
  InputDateTypesEnum,
  InputTextMasksEnum,
} from 'enums/enums'
import { roundNumber } from 'helpers/calculationHelpers'
import {
  convertNullToEmptyString,
  getFormalCase,
  isArray,
  isNull,
  isUndefined,
} from 'helpers/helpers'
import { FieldErrors } from 'react-hook-form'

import { CheckboxController } from './components/CheckboxController'
import { ChecklistController } from './components/ChecklistController'
import { CustomComponentController } from './components/CustomComponentController'
import { CustomController } from './components/CustomController'
import { DateController } from './components/DateController'
import { GroupController } from './components/GroupController'
import { RadioController } from './components/RadioController'
import { SelectController } from './components/SelectController'
import { TextareaController } from './components/TextareaController'
import { TextController } from './components/TextController'
import { ToggleButtonController } from './components/ToggleButtonController'
import { TotalRowController } from './components/TotalRowController'
import { FORM_DEFAULT_INVALIDS, FORM_NO_LABEL } from './Form.constants'
import { FormInput } from './Form.types'

export const getInputController = (component?: InputComponentsEnum) => {
  const inputs = {
    [InputComponentsEnum.Text]: TextController,
    [InputComponentsEnum.Textarea]: TextareaController,
    [InputComponentsEnum.Select]: SelectController,
    [InputComponentsEnum.Radio]: RadioController,
    [InputComponentsEnum.Checklist]: ChecklistController,
    [InputComponentsEnum.ToggleButton]: ToggleButtonController,
    [InputComponentsEnum.Checkbox]: CheckboxController,
    [InputComponentsEnum.Date]: DateController,
    [InputComponentsEnum.Group]: GroupController,
    [InputComponentsEnum.TotalRow]: TotalRowController,
    [InputComponentsEnum.Custom]: CustomController,
    [InputComponentsEnum.CustomComponentWithController]: CustomComponentController,
  }

  return component && inputs[component] ? inputs[component] : TextController
}

export const getDateTypePicker = (dateType?: InputDateTypesEnum) => {
  if (!dateType) return TextInput

  return TextInput
  // const inputs = {
  //   [InputDateTypesEnum.Date]: DatePicker,
  //   [InputDateTypesEnum.Year]: YearPicker,
  //   [InputDateTypesEnum.Month]: MonthPicker,
  //   [InputDateTypesEnum.DateRange]: DateRangePicker,
  //   [InputDateTypesEnum.YearRange]: YearRangePicker,
  //   [InputDateTypesEnum.MonthRange]: MonthRangePicker,
  //   [InputDateTypesEnum.WeekRange]: WeekRangePicker,
  // }

  // return dateType && inputs[dateType] ? inputs[dateType] : DatePicker
}

export const getIsAutoHigh = (component?: InputComponentsEnum) => {
  return component === InputComponentsEnum.Textarea || component === InputComponentsEnum.Checklist
}

export const getRidOfExtraProps = (restProps: any) => {
  return removeObjectAttributes(restProps, [
    'isFilterbar',
    'filterLabel',
    'filterIcon',
    'hideErrors',
  ])
}

export const getCleanErrorMessage = (message: string) => {
  return message.replaceAll('>', '').replace(/\[\d+\]/g, '')
}

export const getAllRequiredFields = (inputs: FormInput[]): number => {
  const requiredFields = inputs.filter(inp => inp.required).length

  const groupRequiredFields = inputs
    .filter(inp => inp.component === InputComponentsEnum.Group)
    .reduce((acc, inp) => {
      return acc + inp.inputs.filter((inpu: any) => inpu.required).length
    }, 0)

  return requiredFields + groupRequiredFields
}

export const getAllInvalidFields = (errors: FieldErrors<any>, forceInvalidFieldsNumber: number) => {
  if (forceInvalidFieldsNumber !== FORM_DEFAULT_INVALIDS) return forceInvalidFieldsNumber

  const invalidFields = Object.values(errors).filter(e => !isArray(e)).length
  const groupInvalidFields = Object.values(errors)
    .filter(e => isArray(e))
    .reduce((total: number, groupErrors) => {
      if (!groupErrors) return total

      // @ts-ignore
      const count = groupErrors.reduce((acc, e) => acc + Object.values(e).length, 0)

      return total + count
    }, 0)

  return invalidFields + groupInvalidFields
}

export const getValidationBarData = (all: number, invalids: number) => {
  const valids = Math.max(0, all - invalids)
  const percentage = all ? roundNumber((valids / all) * 100, 0) : invalids ? 0 : 100
  const isSuccess = percentage === 100
  const color = isSuccess ? ColorsEnum.Green : ColorsEnum.Red
  const icon = isSuccess ? IconsEnum.Ok : IconsEnum.Cancel

  return {
    percentage,
    isSuccess,
    color,
    icon,
  }
}

export const getGroupFieldIndex = (inputName: string): number => {
  if (!inputName) return 0

  const firstDotPosition = inputName.indexOf('.')
  const lastDotPosition = inputName.lastIndexOf('.')

  const index = inputName.substring(firstDotPosition + 1, lastDotPosition)

  return index !== '' ? +index : 0
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

export const submitFormId = (formId: string, delay = 0): void => {
  setTimeout(() => {
    document.getElementById(formId)?.click()
  }, delay)
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
