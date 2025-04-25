import { CSSProperties } from 'react'
import { IconsEnum, SizesEnum } from 'enums/enums'

export type IconProps = {
  icon?: IconsEnum | null
  size?: SizesEnum
  onClick?: () => void
  className?: string
  style?: CSSProperties
}
