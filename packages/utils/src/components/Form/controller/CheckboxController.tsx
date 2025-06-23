import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const CheckboxController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (checked: boolean, onChange: (checkeds: boolean) => void) => {
      onChange(checked)
      onChangeInput?.({ [name]: checked })
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
            <uikitMapper.Checkbox
              checked={!!value}
              onChange={checked => handleChange(checked, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
