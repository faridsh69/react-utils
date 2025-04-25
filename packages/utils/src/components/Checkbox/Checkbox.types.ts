import { SizesEnum } from 'enums/enums'

export type CheckboxProps = {
  size?: SizesEnum
  label?: string
  required?: boolean
  hasError?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  width?: string
  color?: string
  hint?: string
  hintZIndex?: number
}
