import { SizesEnum } from 'enums/enums'

export type RadioProps = {
  checked?: boolean
  onClick?: () => void
  size?: SizesEnum
  disabled?: boolean
  label?: string
  hasError?: boolean
  required?: boolean
  hint?: string
  hintZIndex?: number
}
