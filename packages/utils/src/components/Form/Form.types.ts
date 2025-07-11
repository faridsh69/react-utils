import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import { Control, FieldError } from 'react-hook-form'
import * as yup from 'yup'

import { InputComponentsEnum } from './Form.enums'

type CommonInputProps = {
  name: string
  label?: string
  columns?: number
}

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
type DatepickerProps = InputHTMLAttributes<HTMLInputElement>

export type CheckboxProps = {
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
}

export type OptionValueType = string | number | null | undefined

export type OptionType = {
  label: string
  value: OptionValueType
}

export type CheckListProps = {
  options?: OptionType[]
  value?: OptionValueType[]
  onChange?: (value: OptionValueType[]) => void
}

export type RadioListProps = {
  options?: OptionType[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
}

export type ToggleButtonsProps = {
  options?: OptionType[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
}

export type SelectProps = {
  options?: OptionType[]
  value?: OptionType[]
  multiple?: boolean
  onChange?: (value: OptionType[]) => void
}

type GroupProps = {
  inputs: FormInput[]
  noItemsLabel?: string
  disabled?: boolean
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
}

type CustomProps = {
  ControllerComponent: FC<InputControllerProps>
}

export type FormInput =
  | ({ component: InputComponentsEnum.Text } & CommonInputProps & TextInputProps)
  | ({ component: InputComponentsEnum.Checkbox } & CommonInputProps & CheckboxProps)
  | ({ component: InputComponentsEnum.Checklist } & CommonInputProps & CheckListProps)
  | ({ component: InputComponentsEnum.RadioList } & CommonInputProps & RadioListProps)
  | ({ component: InputComponentsEnum.ToggleButton } & CommonInputProps & ToggleButtonsProps)
  | ({ component: InputComponentsEnum.Textarea } & CommonInputProps & TextareaProps)
  | ({ component: InputComponentsEnum.Select } & CommonInputProps & SelectProps)
  | ({ component: InputComponentsEnum.Date } & CommonInputProps & DatepickerProps)
  | ({ component: InputComponentsEnum.Group } & CommonInputProps & GroupProps)
  | ({ component: InputComponentsEnum.GroupPath } & CommonInputProps & GroupProps)
  | ({ component: InputComponentsEnum.Custom } & CommonInputProps & CustomProps)

export type FormSchemaType = yup.ObjectSchema<any>

export type FormProps = {
  inputs: FormInput[]
  uikitMapper?: Partial<UikitMapperType>
  values?: any
  schema?: FormSchemaType
  onChangeInput?: (formData: any, changedInput: object) => void
  setFormIsValid?: (isValid: boolean) => void
}

export type inputWrapperProps = {
  children: ReactNode
  error?: FieldError
}

export type InputControllerProps = {
  control: Control<any>
  name: string
  onChangeInput?: (changedInput: object) => void
  label?: string
  options?: OptionType[]
  multiple?: boolean
  inputs?: FormInput[]
  disabled?: boolean
  ControllerComponent?: FC<InputControllerProps>
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  noItemsLabel?: string
  errors?: any
  uikitMapper: Partial<UikitMapperType>
}

type harErrorType = { hasError?: boolean }

export type UikitMapperType = {
  TextInput: FC<TextInputProps & harErrorType>
  Checkbox: FC<CheckboxProps & harErrorType>
  Textarea: FC<TextareaProps & harErrorType>
  CheckList: FC<CheckListProps & harErrorType>
  RadioList: FC<RadioListProps & harErrorType>
  Select: FC<SelectProps & harErrorType>
  ToggleButtons: FC<ToggleButtonsProps & harErrorType>
  DatePicker: FC<DatepickerProps & harErrorType>
}
