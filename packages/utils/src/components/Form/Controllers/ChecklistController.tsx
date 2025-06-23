import { useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { CheckListProps, InputControllerProps, OptionValueType } from '../Form.types'

const DefaultChecklist = (props: CheckListProps) => {
  const { options = [], value, onChange } = props

  return (
    <div>
      {options.map(option => {
        return (
          <div key={option.label}>
            {option.label}
            <input
              type='checkbox'
              key={option.label}
              checked={value?.includes?.(option.value)}
              onChange={() => onChange?.([option.value])}
            />
          </div>
        )
      })}
    </div>
  )
}

export const ChecklistController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (checkeds: OptionValueType[], onChange: (checkeds: OptionValueType[]) => void) => {
      onChange(checkeds)
      onChangeInput?.({ [name]: checkeds })
    },
    [onChangeInput],
  )

  const CheckList = uikitMapper.CheckList || DefaultChecklist

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <CheckList
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
