import { ChangeEvent } from 'react'
import { SizesEnum } from 'enums/enums'

export type CheckboxProps = {
  size?: SizesEnum
  label?: string
  required?: boolean
  hasError?: boolean
  checked?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  width?: string
  color?: string
  hint?: string
  hintZIndex?: number
}
