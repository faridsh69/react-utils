import { DirectionsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

export type ToggleButtonsOption = {
  value: OptionValueType
  label: string
  counter?: number
  icon?: IconsEnum
}

export type ToggleButtonsProps = {
  options?: ToggleButtonsOption[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
  size?: SizesEnum
  variant?: VariantsEnum
  direction?: DirectionsEnum
  label?: string
  required?: boolean
  hasError?: boolean
  disabled?: boolean
  hint?: string
  hintZIndex?: number
  sameWidthOptions?: boolean
}
