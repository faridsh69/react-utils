import { ChangeEvent, useCallback } from 'react'
import { convertNullToEmptyString } from 'helpers/helpers'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const TextareaController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>, onChange: (value: string) => void) => {
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
        const inputValue = convertNullToEmptyString(value)

        return (
          <ErrorWrapper {...props} error={error}>
            <uikitMapper.Textarea
              name={name}
              value={inputValue}
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
