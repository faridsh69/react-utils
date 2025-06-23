import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

const DefaultDatepicker = () => {
  return <div>ToggleButtons</div>
}

export const DateController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (date: string, onChange: (value: string) => void) => {
      onChange(date)
      onChangeInput?.({ [name]: date })
    },
    [onChangeInput],
  )

  const Datepicker = uikitMapper.DatePicker || DefaultDatepicker

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Datepicker
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
