import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const DateController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (date: string, onChange: (value: string) => void) => {
      onChange(date)
      onChangeInput?.({ [name]: date })
    },
    [onChangeInput],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper {...props} error={error}>
            <uikitMapper.DatePicker
              value={value}
              onChange={(date: any) => handleChange(date, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
