import { SizesEnum } from 'enums/enums'

export type RadioValue = string | number | boolean | null

export type RadioProps = {
  checked?: boolean
  onClick?: () => void
  size?: SizesEnum
  disabled?: boolean
  label?: string
  background?: boolean
  hasError?: boolean
  required?: boolean
  hint?: string
  hintZIndex?: number
}
