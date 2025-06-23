import { useCallback } from 'react'
import { OptionValueType } from 'interfaces/interfaces'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const ToggleButtonController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (value: OptionValueType, onChange: (value: OptionValueType) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
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
            <uikitMapper.ToggleButtons
              value={value}
              onChange={value => handleChange(value, onChange)}
              options={options}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
