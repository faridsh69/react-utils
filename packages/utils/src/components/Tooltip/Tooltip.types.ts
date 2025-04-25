import { ReactNode } from 'react'
import { PlacementsEnum, SizesEnum, VariantsEnum } from 'enums/enums'

export type TooltipProps = {
  children?: ReactNode
  overlay?: ReactNode
  placement?: PlacementsEnum
  size?: SizesEnum
  disabled?: boolean
  variant?: VariantsEnum
  mouseEnterDelay?: number
  zIndex?: number
}
