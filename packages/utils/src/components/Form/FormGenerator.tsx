import { useCallback, useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from 'components/Button/Button'
import { IconsEnum } from 'enums/enums'
import { getLabelOfInputs } from 'helpers/formHelpers'
import { useTrans } from 'hooks/useTrans'
import { useForm } from 'react-hook-form'

import { ValidationBar } from './components/ValidationBar'
import { getAllInvalidFields, getInputController } from './Form.helpers'
import { FormGeneratorProps } from './Form.types'
import styles from './Form.module.scss'

export const FormGenerator = (props: FormGeneratorProps) => {
  const {
    inputs,
    schema,
    values,
    defaultValues,
    onSubmit,
    onChangeInput: propOnChangeInput,
    hiddenSubmitButtonId,
    submitButtonProps = {},
    isFilterbar = false,
    hideErrors = false,
    height,
    progress,
    setProgress,
    triggerOnChange,
    forceInvalidFieldsNumber,
  } = props

  const { t } = useTrans()

  const {
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: 'onTouched',
    values: values,
    defaultValues: defaultValues,
  })

  console.log('1 errors', errors)

  useEffect(() => {
    if (values) {
      trigger()
    }
  }, [values])

  const callTrigger = () => {
    trigger()
    setTimeout(() => trigger(), 0)
  }

  useEffect(() => callTrigger(), [triggerOnChange])

  const onChangeInput = (inputObject: any) => {
    callTrigger()
    const formData = watch()
    propOnChangeInput?.(inputObject, formData)
  }

  const onGeneralSubmit = useCallback(
    (data: any) => {
      onSubmit?.(data)
    },
    [onSubmit],
  )

  useEffect(() => {
    setProgress(p => ({
      ...p,
      invalids: getAllInvalidFields(errors, forceInvalidFieldsNumber),
    }))
  }, [errors, forceInvalidFieldsNumber])

  return (
    <form
      onSubmit={handleSubmit(onGeneralSubmit)}
      className={styles.form}
      style={{ maxHeight: height }}
    >
      {!hideErrors && <ValidationBar {...progress} />}
      <div className={styles.row}>
        {inputs.map(input => {
          const { component, name, columns = 12, label: inputLabel, ...rest } = input

          const InputController = getInputController(component)
          const label = getLabelOfInputs(name, inputLabel)

          return (
            <div key={input.name} className={styles[`col-${columns}`]}>
              <InputController
                control={control}
                onChangeInput={onChangeInput}
                key={name}
                name={name}
                label={isFilterbar ? '' : label}
                errors={errors}
                {...rest}
              />
            </div>
          )
        })}
        {!hiddenSubmitButtonId && (
          <div className={styles['col-12']}>
            <Button label={t('Save')} icon={IconsEnum.Ok} type='submit' {...submitButtonProps} />
          </div>
        )}
        {hiddenSubmitButtonId && (
          <button type='submit' id={hiddenSubmitButtonId} className={styles.submitBtn} />
        )}
      </div>
    </form>
  )
}
