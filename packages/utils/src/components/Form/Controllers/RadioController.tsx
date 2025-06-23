import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps, OptionValueType, RadioListProps } from '../Form.types'

const DefaultRadioList = (props: RadioListProps) => {
  const { options = [], value, onChange } = props

  return (
    <div>
      {options.map(option => {
        return (
          <div key={option.label}>
            {option.label}
            <input
              type='radio'
              key={option.label}
              checked={value === option.value}
              onChange={() => onChange?.(option.value)}
            />
          </div>
        )
      })}
    </div>
  )
}

export const RadioController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (value: OptionValueType, onChange: (value: OptionValueType) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const RadioList = uikitMapper.RadioList || DefaultRadioList

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <RadioList
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
