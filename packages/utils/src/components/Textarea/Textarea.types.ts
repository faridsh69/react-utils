import { TextareaHTMLAttributes } from 'react'

import { TextareaSizes } from './Textarea.enums'

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'size'> {
  label?: string
  size?: TextareaSizes
  hasError?: boolean
  hint?: string
  hintZIndex?: number
  isResizable?: boolean

  width?: string
  placeholder?: string
  errorText?: string

  min?: number
  max?: number
  wrapperClassName?: string
}

export type CharacterCounterProps = {
  valueLength?: number
  min?: number
  max?: number
  invalidLength?: boolean
}
