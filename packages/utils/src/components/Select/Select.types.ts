import { ChangeEvent } from 'react'
import { ButtonProps } from 'components/Button/Button.types'
import { TextInputProps } from 'components/TextInput/TextInput.types'
import { IconsEnum, PlacementsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

import { SelectTriggerComponents } from './Select.enums'

export type SelectValue = OptionValueType | SelectOption[]

export type SelectOption = {
  label: string
  value: OptionValueType
  icon?: IconsEnum
  color?: string
  avatar?: string
  disabled?: boolean
  groupId?: string | number
}

export type SelectDisplayedOption = SelectOption & {
  isGroupOption?: boolean
  isSelected?: boolean
}

export type SelectGroup = {
  id: string | number
  label: string
}

export type TriggerProp =
  | { component: SelectTriggerComponents.Input; props?: TextInputProps }
  | { component: SelectTriggerComponents.Button; props?: ButtonProps }

type SelectDefaultProps = {
  options?: SelectOption[]
  groups?: SelectGroup[]
  size?: SizesEnum
  placement?: PlacementsEnum
  disabled?: boolean
  trigger?: TriggerProp
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  isSearchable?: boolean
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void
  onScrollToBottom?: () => void
  width?: number | string
  height?: number | string
  zIndex?: number | string
  isLoading?: boolean
  showOnlySelecteds?: boolean
  label?: string
  placeholder?: string
  hint?: string
  hintZIndex?: number
  required?: boolean
  hasError?: boolean
}

export type SelectProps =
  | ({
      multiple: true
      value?: SelectOption[]
      onChange?: (value: SelectOption[]) => void
    } & SelectDefaultProps)
  | ({
      multiple: false
      value?: OptionValueType
      onChange?: (value: OptionValueType) => void
    } & SelectDefaultProps)

export type TriggerComponentops = {
  triggerSelectedOption: SelectOption
  size: SizesEnum
  disabled: boolean
  trigger: TriggerProp
  isActive: boolean
  handleClearInput: () => void
  width?: number | string
  clearable: boolean
  label?: string
  placeholder?: string
  hint?: string
  hintZIndex?: number
  required?: boolean
  hasError?: boolean
}

export type MenuProps = {
  multiple: boolean
  value?: OptionValueType | SelectOption[]
  onChange?: ((value: SelectOption[]) => void) | ((value: OptionValueType) => void) | undefined

  options: SelectOption[]
  groups: SelectGroup[]
  size: SizesEnum
  isSearchable: boolean
  searchTerm: string
  onSearch?: (event: ChangeEvent<HTMLInputElement>) => void
  setSearchTerm: (searchTerm: string) => void
  onScrollToBottom?: () => void
  handleCloseMenu: () => void
  width?: number | string
  height?: number | string
  isLoading: boolean
}

export type MenuOptionProps = {
  option: SelectDisplayedOption
  onClick: (option: SelectDisplayedOption) => void
  index: number
  multiple: boolean
  size: SizesEnum
}

export type MenuOptionsProps = {
  options: SelectDisplayedOption[]
  size: SizesEnum
  multiple: boolean
  handleClickOption: (option: SelectDisplayedOption) => void
  handleScrollMenu?: (e: any) => void
}
