import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

const DefaultTextInput = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input type='text' {...props} />
)

export const TextController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, onChange: (v: string | number) => void) => {
      const value = e.target.value
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const TextInput = uikitMapper.TextInput || DefaultTextInput

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <TextInput
              value={value || ''}
              onChange={e => handleChange(e, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
