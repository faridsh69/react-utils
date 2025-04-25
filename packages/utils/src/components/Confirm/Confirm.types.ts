import { ColorsEnum } from 'enums/enums'

export type ConfirmProps = {
  onConfirm: () => void
  color?: ColorsEnum
  label?: string
  subLabel?: string
  imageSrc?: string
  onCancel?: () => void
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
}
