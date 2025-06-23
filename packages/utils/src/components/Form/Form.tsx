import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { getFormalCase } from 'helpers/helpers'
import { useForm } from 'react-hook-form'

import { ValidationBar } from './controller/ValidationBar'
import { getInputController } from './Form.helpers'
import { FormProps } from './Form.types'
import styles from './Form.module.scss'

export const Form = (props: FormProps) => {
  const {
    inputs = [],
    values,
    schema = undefined,
    onChangeInput: propOnChangeInput,
    uikitMapper,
    setFormIsValid,
  } = props

  const {
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'all',
    values: values,
  })

  const onChangeInput = (inputObject: object) => {
    propOnChangeInput?.(watch(), inputObject)
  }

  const invalids = Object.values(errors).length

  useEffect(() => {
    setFormIsValid?.(invalids === 0)
  }, [invalids])

  return (
    <div className={styles.form}>
      {schema && <ValidationBar all={inputs.length} invalids={invalids} />}

      <div className={styles.row}>
        {inputs.map(input => {
          const { component, name, columns = 12, label: inputLabel, ...rest } = input

          const InputController = getInputController(component)
          const label = inputLabel || getFormalCase(name)

          return (
            <div key={input.name} className={styles[`col-${columns}`]}>
              <InputController
                control={control}
                name={name}
                key={name}
                label={label}
                errors={errors}
                onChangeInput={onChangeInput}
                uikitMapper={uikitMapper}
                {...rest}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
