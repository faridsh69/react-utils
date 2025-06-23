import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { CheckboxProps, InputControllerProps } from '../Form.types'

const DefaultCheckbox = (props: CheckboxProps) => {
  return (
    <div>
      <input type='checkbox' {...props} />
      {props.label}
    </div>
  )
}

export const CheckboxController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (checked: boolean, onChange: (checkeds: boolean) => void) => {
      onChange(checked)
      onChangeInput?.({ [name]: checked })
    },
    [onChangeInput],
  )

  const Checkbox = uikitMapper.Checkbox || DefaultCheckbox

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Checkbox
              checked={!!value}
              onChange={e => handleChange(e.target.checked, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
