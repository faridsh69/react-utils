import { ChangeEvent, useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

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

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        return (
          <ErrorWrapper {...props} error={error}>
            <uikitMapper.TextInput
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
