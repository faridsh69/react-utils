import { IconsEnum, SizesEnum } from 'enums/enums'

export type ChipProps = {
  onClose?: () => void
  label?: string
  size?: SizesEnum
  icon?: IconsEnum
  color?: string
  backgroundColor?: string
  bold?: boolean
  width?: string | number
}
