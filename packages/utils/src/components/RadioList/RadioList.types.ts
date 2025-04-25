import { DirectionsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

export type RadioListOption = {
  value: OptionValueType
  label: string
}

export type RadioListProps = {
  options?: RadioListOption[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
  size?: SizesEnum
  direction?: DirectionsEnum
  label?: string
  required?: boolean
  hasError?: boolean
  disabled?: boolean
  hint?: string
  hintZIndex?: number
  background?: boolean
  width?: string | number
}
