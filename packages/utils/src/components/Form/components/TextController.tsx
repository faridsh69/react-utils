import { ChangeEvent, useCallback } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { InputTextMasksEnum } from 'enums/enums'
import { useDebounceMethod } from 'hooks/useDebounceMethod'
import { Controller } from 'react-hook-form'

import { getClientInputValue, getRidOfExtraProps, getServerInputValue } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import { InputWrapper } from './InputWrapper'

export const TextController = (props: InputControllerProps) => {
  const {
    control,
    name,
    mask = InputTextMasksEnum.String,
    onChangeInput,
    debounceTime = 0,
    ...rest
  } = props

  const restProps = getRidOfExtraProps(rest)

  const debouncedChangeInput = useDebounceMethod(onChangeInput, debounceTime)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, onChange: (v: string | number) => void) => {
      const value = getServerInputValue(e, mask)

      onChange(value)
      debouncedChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const textAlignRight = mask === InputTextMasksEnum.PriceDe || mask === InputTextMasksEnum.PriceEn

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        const clientInputValue = getClientInputValue(value, mask)

        return (
          <InputWrapper {...props} filterValue={clientInputValue} error={error}>
            <TextInput
              value={clientInputValue}
              onChange={e => handleChange(e, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              textAlignRight={textAlignRight}
              {...restProps}
            />
          </InputWrapper>
        )
      }}
    />
  )
}
