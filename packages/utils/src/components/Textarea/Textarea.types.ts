import { ChangeEvent, FocusEvent, TextareaHTMLAttributes } from 'react'

import { TextareaSizes } from './Textarea.enums'

export interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'className' | 'size'
  > {
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  label?: string
  size?: TextareaSizes
  disabled?: boolean
  hasError?: boolean
  required?: boolean
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
