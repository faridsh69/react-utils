import { ColorsEnum, IconsEnum, SidesEnum, SizesEnum, VariantsEnum } from 'enums/enums'

export type ButtonProps = {
  type?: string
  label?: string
  variant?: VariantsEnum
  color?: ColorsEnum
  size?: SizesEnum
  active?: boolean
  disabled?: boolean
  icon?: IconsEnum
  onClick?: () => void
  noRadius?: SidesEnum[]
}
