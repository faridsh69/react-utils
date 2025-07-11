import { ChangeEvent, InputHTMLAttributes, useCallback } from 'react'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'
import styles from '../Form.module.scss'

const DefaultTextInput = (props: InputHTMLAttributes<HTMLInputElement> & { label: string }) => (
  <div className={styles.flexColumn}>
    {props.label}
    <br />
    <input type='text' {...props} />
  </div>
)

export const TextController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, uikitMapper, ...rest } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, onChange: (v: string | number) => void) => {
      const value = e.target.value
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  const TextInput = uikitMapper?.TextInput || DefaultTextInput

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <TextInput
              value={value || ''}
              onChange={e => handleChange(e, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
