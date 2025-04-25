import { ColorsEnum, DirectionsEnum, IconsEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

export type TabItemsOption = {
  value?: OptionValueType
  label?: string
  icon?: IconsEnum
  disabled?: boolean
  color?: ColorsEnum
}

export type TabItemsProps = {
  options?: TabItemsOption[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
  background?: boolean
  direction?: DirectionsEnum
  title?: string
}
