import { useCallback } from 'react'
import { Select } from 'components/Select/Select'
import { getFilterValueSelect } from 'helpers/formHelpers'
import { Controller } from 'react-hook-form'

import { getRidOfExtraProps } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const SelectController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options = [], multiple = false, ...rest } = props

  const restProps = getRidOfExtraProps(rest)

  const handleChange = useCallback(
    (value: any, onChange: (data: any) => void) => {
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
        const filterValue = getFilterValueSelect(value, multiple, options)

        return (
          <InputWrapper {...props} filterValue={filterValue} error={error}>
            <Select
              onChange={(value: any) => handleChange(value, onChange)}
              options={options}
              value={value}
              multiple={multiple}
              hasError={!!error}
              {...restProps}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
