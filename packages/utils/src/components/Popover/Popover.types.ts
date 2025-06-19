import { ReactNode } from 'react'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'

export type PopoverProps = {
  children?: ReactNode
  overlay?: ReactNode
  placement?: PlacementsEnum
  disabled?: boolean
  openOnAction?: ActionsEnum
  zIndex?: number | string
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  offset?: number
}
