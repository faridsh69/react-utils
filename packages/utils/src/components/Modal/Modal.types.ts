import { ReactNode } from 'react'
import { ButtonProps } from 'components/Button/Button.types'

export type ModalProps = {
  title?: string
  body?: ReactNode
  actions?: ButtonProps[]
  background?: boolean
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  zIndex?: number
  overlayZIndex?: number
  bodyPadding?: boolean
  hideHeader?: boolean
  actionsCenter?: boolean
}

export type MainLayerProps = {
  title?: string
  body?: ReactNode
  actions: ButtonProps[]
  handleCloseModal: () => void
  bodyPadding?: boolean
  hideHeader?: boolean
  actionsCenter?: boolean
}
