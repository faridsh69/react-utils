import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps, OptionType } from '../Form.types'

export const ChecklistController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (checkeds: OptionType[], onChange: (checkeds: OptionType[]) => void) => {
      onChange(checkeds)
      onChangeInput?.({ [name]: checkeds })
    },
    [onChangeInput],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <uikitMapper.CheckList
              value={value || []}
              onChange={checkeds => handleChange(checkeds, onChange)}
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
