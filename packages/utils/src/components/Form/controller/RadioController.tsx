import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps, OptionValueType } from '../Form.types'

export const RadioController = (props: InputControllerProps) => {
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
            <uikitMapper.RadioList
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
