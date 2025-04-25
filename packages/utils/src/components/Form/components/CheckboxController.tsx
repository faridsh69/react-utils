import { useCallback } from 'react'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { ZINDEXES } from 'constants/constants'
import { SizesEnum } from 'enums/enums'
import { getFilterValueOfBoolean } from 'helpers/formHelpers'
import { Controller } from 'react-hook-form'

import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const CheckboxController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name,
    label,
    size = SizesEnum.M,
    hintZIndex = ZINDEXES.tooltip,
    background = false,
    ...rest
  } = props

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
          <InputWrapper {...props} filterValue={getFilterValueOfBoolean(value)} error={error}>
            <Checkbox
              label={label}
              checked={!!value}
              onChange={checked => handleChange(checked, onChange)}
              hasError={!!error}
              size={size}
              hintZIndex={hintZIndex}
              {...rest}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
