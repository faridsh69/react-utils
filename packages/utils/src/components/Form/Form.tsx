import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum, IconsEnum } from 'enums/enums'

import { ValidationCollapsed } from './components/ValidationCollapsed'
import { FORM_DEFAULT_INVALIDS } from './Form.constants'
import { getAllRequiredFields } from './Form.helpers'
import { FormProps, TypeFormProgress } from './Form.types'
import { FormGenerator } from './FormGenerator'
import styles from './Form.module.scss'

export const Form = (props: FormProps) => {
  const {
    inputs = [],
    values,
    defaultValues,
    schema = undefined,
    onSubmit,
    onChangeInput,
    hiddenSubmitButtonId,
    submitButtonProps,
    label,
    subLabel,
    icon,
    width = '100%',
    height,
    background = true,
    noPadding = false,
    isFilterbar = false,
    hideErrors = false,
    collapsable = false,
    isCollapsed: propsIsCollapsed = false,
    setIsCollapsed: propSetIsCollapsed,
    triggerValidationOnChangeState: triggerOnChange,
    forceInvalidFieldsNumber = FORM_DEFAULT_INVALIDS,
    showValidations = true,
    setFormIsValid,
  } = props

  const defaultCollapsed = collapsable && propsIsCollapsed
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  useEffect(() => {
    if (!collapsable || propsIsCollapsed === isCollapsed) return

    setIsCollapsed(propsIsCollapsed)
  }, [propsIsCollapsed])

  const changeCollapse = useCallback(
    (collapse: boolean) => {
      if (!collapsable) return

      setIsCollapsed(collapse)
      propSetIsCollapsed?.(collapse)
    },
    [collapsable],
  )

  const showHeader = icon || label || collapsable
  const showBackground = background && !isCollapsed

  const [progress, setProgress] = useState<TypeFormProgress>({
    all: getAllRequiredFields(inputs),
    invalids: FORM_DEFAULT_INVALIDS,
    showValidations,
  })

  useEffect(() => {
    if (!setFormIsValid) return

    const isValid = progress.invalids === 0

    setFormIsValid(isValid)
  }, [progress.invalids])

  return (
    <div
      className={clsx(
        styles.wrapper,
        showBackground && styles.background,
        background && styles.backgroundOnHover,
        noPadding && styles.noPadding,
        isCollapsed && styles.isCollapsed,
      )}
      style={{ width, minWidth: width }}
      onClick={isCollapsed ? () => changeCollapse(false) : undefined}
    >
      {showHeader && (
        <div className={styles.header} onClick={() => changeCollapse(true)}>
          <div className={styles.headerTitle}>
            <Icon icon={icon} className={styles.icon} />
            <div className={styles.label}>
              <Label label={label} font={FontsEnum.Header22} color={ColorsEnum.BlueDark} />
              {isCollapsed && <Label label={subLabel} disabled />}
            </div>
          </div>
          {collapsable && (
            <div className={styles.collapse}>
              {isCollapsed ? (
                showValidations ? (
                  <ValidationCollapsed {...progress} showValidations={showValidations} />
                ) : (
                  <Icon icon={IconsEnum.ArrowBottom} />
                )
              ) : (
                <div className={styles.collapseText}>
                  <Icon icon={IconsEnum.ArrowBottom} />
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <div
        className={clsx(
          styles.body,
          showHeader && styles.showHeader,
          isCollapsed && styles.isCollapsedForm,
        )}
      >
        <FormGenerator
          inputs={inputs}
          schema={schema}
          values={values}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          onChangeInput={onChangeInput}
          hiddenSubmitButtonId={hiddenSubmitButtonId}
          submitButtonProps={submitButtonProps}
          noPadding={noPadding}
          isFilterbar={isFilterbar}
          height={height}
          hideErrors={hideErrors}
          progress={progress}
          setProgress={setProgress}
          triggerOnChange={triggerOnChange}
          forceInvalidFieldsNumber={forceInvalidFieldsNumber}
        />
      </div>
    </div>
  )
}
