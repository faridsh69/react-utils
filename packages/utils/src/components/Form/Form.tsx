import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { ValidationBar } from './components/ValidationBar'
import { getInputController, getLabelOfInputs } from './Form.helpers'
import { FormProps } from './Form.types'
import styles from './Form.module.scss'

export const Form = (props: FormProps) => {
  const {
    inputs = [],
    values,
    schema = undefined,
    onChangeInput: propOnChangeInput,
    showValidations = true,
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

  const onChangeInput = (inputObject: any) => {
    propOnChangeInput?.(watch(), inputObject)
  }

  const invalids = Object.values(errors).length

  useEffect(() => {
    setFormIsValid?.(invalids === 0)
  }, [invalids])

  return (
    <div className={styles.form}>
      {showValidations && <ValidationBar all={inputs.length} invalids={invalids} />}

      <div className={styles.row}>
        {inputs.map(input => {
          const { component, name, columns = 12, label: inputLabel, ...rest } = input

          const InputController = getInputController(component)
          const label = getLabelOfInputs(name, inputLabel)

          return (
            <div key={input.name} className={styles[`col-${columns}`]}>
              <InputController
                control={control}
                name={name}
                key={name}
                label={label}
                errors={errors}
                onChangeInput={onChangeInput}
                {...rest}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
