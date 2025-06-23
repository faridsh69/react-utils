import { FC, ReactNode } from 'react'
import { BreadCrumbOptionsType } from 'components/BreadCrumb/BreadCrumb.types'
import { CheckboxProps } from 'components/Checkbox/Checkbox.types'
import { CheckListProps } from 'components/CheckList/CheckList.types'
import { RadioListProps } from 'components/RadioList/RadioList.types'
import { SelectOption, SelectProps } from 'components/Select/Select.types'
import { TextareaProps } from 'components/Textarea/Textarea.types'
import { TextInputProps } from 'components/TextInput/TextInput.types'
import { ToggleButtonsProps } from 'components/ToggleButtons/ToggleButtons.types'
import { InputComponentsEnum, InputDateTypesEnum, InputTextMasksEnum, SizesEnum } from 'enums/enums'
import { Control, FieldError } from 'react-hook-form'
import * as yup from 'yup'

type Input = {
  name: string
  columns?: number
  size?: SizesEnum
  label?: string
  hideErrors?: boolean
  required?: boolean
}

type GroupProps = {
  disabled?: boolean
  inputs: FormInput[]
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  noItemsLabel?: string
  checkPathInBreadcrumb?: boolean
  arrowButtonPath?: string
  breadCrumbOptions?: BreadCrumbOptionsType[]
}

type CustomProps = {
  ControllerComponent: FC<InputControllerProps>
}

export type FormInput =
  | ({ component: InputComponentsEnum.Text } & Input &
      TextInputProps & { mask?: InputTextMasksEnum; debounceTime?: number })
  | ({ component: InputComponentsEnum.Textarea } & Input & Omit<TextareaProps, 'size'>)
  | ({ component: InputComponentsEnum.Select } & Input & SelectProps)
  | ({ component: InputComponentsEnum.Radio } & Input & RadioListProps)
  | ({ component: InputComponentsEnum.Checklist } & Input & CheckListProps)
  | ({ component: InputComponentsEnum.ToggleButton } & Input & ToggleButtonsProps)
  | ({ component: InputComponentsEnum.Checkbox } & Input & Omit<CheckboxProps, 'size'>)
  | ({ component: InputComponentsEnum.Date } & Input)
  | ({ component: InputComponentsEnum.Group } & Input & GroupProps)
  | ({ component: InputComponentsEnum.Custom } & Input & CustomProps)

export type FormProps = {
  inputs: FormInput[]
  values?: any
  schema?: FormSchemaType
  onChangeInput?: (formData: any, changedInput: any) => void
  showValidations?: boolean
  setFormIsValid?: (isValid: boolean) => void
}

export type FormSchemaType = yup.ObjectSchema<any>

export type TypeFormProgress = { all: number; invalids: number }

export type inputWrapperProps = {
  children: ReactNode
  error?: FieldError
  filterValue?: string
} & InputControllerProps

export type InputControllerProps = {
  control: Control<any>
  name: string
  hideErrors?: boolean
  onChangeInput?: (inputData: any) => void
  label?: string
  options?: SelectOption[]
  multiple?: boolean
  clearable?: boolean
  hintZIndex?: number
  stretch?: boolean
  size?: SizesEnum
  zIndex?: number | string
  debounceTime?: number
  dateType?: InputDateTypesEnum
  background?: boolean
  mask?: InputTextMasksEnum
  inputs?: FormInput[]
  minutesStep?: number
  expandeds?: string[]
  disabled?: boolean
  children?: ReactNode
  ControllerComponent?: FC<InputControllerProps>
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  noItemsLabel?: string
  errors?: any
  active?: boolean
  breadCrumbOptions?: BreadCrumbOptionsType[]
  checkPathInBreadcrumb?: boolean
  arrowButtonPath?: string
}
