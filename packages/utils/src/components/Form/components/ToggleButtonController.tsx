import { useCallback } from 'react'
import { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'
import { Controller } from 'react-hook-form'
import { OptionValueType } from 'types/types'

import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const ToggleButtonController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, label, options, ...rest } = props

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
          <InputWrapper {...props} filterValue={value} error={error}>
            <ToggleButtons
              label={label}
              value={value}
              onChange={value => handleChange(value, onChange)}
              options={options}
              hasError={!!error}
              {...rest}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
