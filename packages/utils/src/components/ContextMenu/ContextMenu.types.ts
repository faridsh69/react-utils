import { ReactNode } from 'react'
import { ButtonProps } from 'components/Button/Button.types'
import { ActionsEnum, ColorsEnum, IconsEnum, PlacementsEnum } from 'enums/enums'

export type ContextMenuOptionType = {
  icon?: IconsEnum
  statusChipColor?: string
  label?: string
  onClick?: () => void
  options?: ContextMenuOptionType[]
  isSeparator?: boolean
  isSelected?: boolean
  disabled?: boolean
  color?: ColorsEnum
}

export type ContextMenuProps = {
  triggerOnAction?: ActionsEnum
  showAtClickPoint?: boolean
  triggerButtonProps?: ButtonProps
  triggerNode?: ReactNode
  options?: ContextMenuOptionType[]
  zIndex?: number
  offset?: number
  disabled?: boolean
  placement?: PlacementsEnum
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  width?: string | number
  triggerWrapperClassName?: string
}

export type MenuProps = {
  options: ContextMenuOptionType[]
  handleCloseMenu: () => void
  width?: string | number
  zIndex?: number
}

export type SubmenuProps = {
  subOptions: ContextMenuOptionType[]
  option: ContextMenuOptionType
  zIndex?: number
  handleCloseMenu: () => void
  isLast?: boolean
}

export type MenuOptionProps = {
  option: ContextMenuOptionType
  isLast?: boolean
  handleCloseMenu: () => void
  canHasSubmenu: boolean
  zIndex?: number
}

export type TriggerProps = {
  triggerNode: ReactNode
  triggerButtonProps: ButtonProps
  isOpen: boolean
  disabled?: boolean
}
