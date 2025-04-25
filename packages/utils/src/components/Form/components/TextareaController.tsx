import { ChangeEvent, useCallback } from 'react'
import { Textarea } from 'components/Textarea/Textarea'
import { ZINDEXES } from 'constants/constants'
import { convertNullToEmptyString } from 'helpers/helpers'
import { Controller } from 'react-hook-form'

import { getRidOfExtraProps } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const TextareaController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, hintZIndex = ZINDEXES.tooltip, ...rest } = props

  const restProps = getRidOfExtraProps(rest)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>, onChange: (value: string) => void) => {
      const value = e.target.value
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        const inputValue = convertNullToEmptyString(value)

        return (
          <InputWrapper {...props} filterValue={value} error={error}>
            <Textarea
              name={name}
              value={inputValue}
              onChange={e => handleChange(e, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              hintZIndex={hintZIndex}
              {...restProps}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
