import { ReactNode } from 'react'
import { PlacementsEnum } from 'enums/enums'

import { PopoverOpenOnActions } from './Popover.enums'

export type PopoverProps = {
  children?: ReactNode
  overlay?: ReactNode
  placement?: PlacementsEnum
  disabled?: boolean
  openOnAction?: PopoverOpenOnActions
  zIndex?: number | string
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  offset?: number
  closeOnClickOutside?: boolean
  stillOpenOnClickPortals?: boolean
  alwaysKeepMountOverlay?: boolean
}
