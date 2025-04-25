import { ChangeEvent } from 'react'
import { IconsEnum, SidesEnum, SizesEnum } from 'enums/enums'

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string | number
  label?: string
  size?: SizesEnum
  required?: boolean
  disabled?: boolean
  hasError?: boolean
  errorText?: string
  readOnly?: boolean
  width?: string | number
  hint?: string
  hintZIndex?: number
  unit?: string
  icon?: IconsEnum
  iconColor?: string
  withHandle?: boolean
  active?: boolean
  clearable?: boolean
  onClear?: () => void
  copyable?: boolean
  hideable?: boolean
  wrapperClassName?: string
  noBorderRadiuses?: SidesEnum[]
  noBorderColors?: SidesEnum[]
  textAlignRight?: boolean
}

export type InputOptionsProps = {
  size?: SizesEnum
  value?: string | number
  unit?: string
  withHandle?: boolean
  clearable?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  copyable?: boolean
  hideable?: boolean
  active?: boolean
  disabled?: boolean
  visible?: boolean
  setVisible: (visible: boolean) => void
  onClear?: () => void
}
