import { useCallback } from 'react'
import { SelectProps } from 'components/Select/Select.types'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

const DefaultSelect = (props: SelectProps) => {
  const { options = [] } = props
  return (
    // @ts-ignore
    <select {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value as any}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const SelectController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name,
    options = [],
    multiple = false,
    uikitMapper,
    ...rest
  } = props

  const handleChange = useCallback(
    (value: any, onChange: (data: any) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const Select = uikitMapper.Select || DefaultSelect

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Select
              onChange={(value: any) => handleChange(value, onChange)}
              options={options}
              value={value}
              multiple={multiple}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
