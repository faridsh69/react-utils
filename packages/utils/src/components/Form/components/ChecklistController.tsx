import { useCallback } from 'react'
import { CheckList } from 'components/CheckList/CheckList'
import { CheckListOption } from 'components/CheckList/CheckList.types'
import { OptionValueType } from 'interfaces/interfaces'
import { Controller } from 'react-hook-form'

import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const ChecklistController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  const handleChange = useCallback(
    (checkeds: OptionValueType[], onChange: (checkeds: OptionValueType[]) => void) => {
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
        const checkListValue = value || []
        const filterValue = checkListValue.join(', ')

        return (
          <InputWrapper {...props} filterValue={filterValue} error={error}>
            <CheckList
              value={checkListValue}
              onChange={checkeds => handleChange(checkeds, onChange)}
              options={options as CheckListOption[]}
              hasError={!!error}
              {...rest}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
