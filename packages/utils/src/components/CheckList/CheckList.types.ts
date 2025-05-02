import { DirectionsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

export type CheckListOption = {
  value: OptionValueType
  label: string
}

export type CheckListProps = {
  options?: CheckListOption[]
  value?: OptionValueType[]
  onChange?: (value: OptionValueType[]) => void
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
