import { TextInput } from 'components/TextInput/TextInput'
import { ColorsEnum, IconsEnum, InputComponentsEnum, InputDateTypesEnum } from 'enums/enums'
import { roundNumber } from 'helpers/calculationHelpers'
import { removeObjectAttributes } from 'helpers/formHelpers'
import { isArray } from 'helpers/helpers'
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
import { FORM_DEFAULT_INVALIDS } from './Form.constants'
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
