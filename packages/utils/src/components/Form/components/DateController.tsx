import { useCallback } from 'react'
import { ZINDEXES } from 'constants/constants'
import { InputDateTypesEnum } from 'enums/enums'
import { Controller } from 'react-hook-form'

import { getDateTypePicker } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const DateController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name,
    dateType = InputDateTypesEnum.Date,
    hintZIndex = ZINDEXES.tooltip,
    ...rest
  } = props

  const handleChange = useCallback(
    (date: any, onChange: (value: string) => void) => {
      const value = date.value
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const DateTypePicker = getDateTypePicker(dateType)
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const filterValue = value?.from && value?.to ? `${value.from} - ${value.to}` : value

        return (
          <InputWrapper {...props} filterValue={filterValue} error={error}>
            <DateTypePicker
              value={value}
              onChange={date => handleChange(date, onChange)}
              hasError={!!error}
              hintZIndex={hintZIndex}
              {...rest}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
