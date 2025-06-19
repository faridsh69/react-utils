import { ChangeEvent, useCallback } from 'react'
import { clsx } from 'clsx'
import { Button } from 'components/Button/Button'
import { ButtonProps } from 'components/Button/Button.types'
import { Icon } from 'components/Icon/Icon'
import { ColorsEnum, IconsEnum, SidesEnum, VariantsEnum } from 'enums/enums'
import { copyToClipboard } from 'helpers/helpers'

import { InputOptionsProps } from './TextInput.types'
import styles from './TextInput.module.scss'

export const InputOptions = (props: InputOptionsProps) => {
  const {
    size,
    value,
    active,
    disabled,
    onChange,
    unit,
    withHandle,
    clearable,
    copyable,
    hideable,
    visible = true,
    setVisible,
    onClear,
  } = props

  const handleClear = useCallback(() => {
    onChange?.({
      target: { value: '' },
    } as ChangeEvent<HTMLInputElement>)
    onClear?.()
  }, [onChange])

  const handleCopy = useCallback(() => {
    if (!value) return

    copyToClipboard('' + value)
  }, [value])

  const handleHide = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  const showUnit = !withHandle && unit
  const showClear = clearable && value && !disabled
  const showCopy = copyable && value && !showClear
  const showHide = hideable && value && !showClear && !showCopy
  const showSeparator = unit && (showClear || showCopy || showHide) && !withHandle
  const noBorderRadius = withHandle ? [SidesEnum.All] : [SidesEnum.Left]

  const buttonProps: ButtonProps = {
    variant: VariantsEnum.Ghost,
    color: ColorsEnum.Blue,
    size,
    noBorderRadius,
  }

  return (
    <div className={styles.options}>
      {withHandle && (
        <div className={styles.handle}>
          <Icon icon={active ? IconsEnum.ArrowTop : IconsEnum.ArrowBottom} />
        </div>
      )}
      {showUnit && <div className={styles.unit}>{unit}</div>}
      {showSeparator && <div className={styles.separator} />}

      {showClear && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button icon={IconsEnum.Cancel} onClick={handleClear} {...buttonProps} />
        </div>
      )}

      {showCopy && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button icon={IconsEnum.Copy} onClick={handleCopy} {...buttonProps} />
        </div>
      )}

      {showHide && (
        <div className={clsx(withHandle && styles.moveLeft)}>
          <Button
            icon={visible ? IconsEnum.Visible : IconsEnum.Invisible}
            onClick={handleHide}
            {...buttonProps}
          />
        </div>
      )}
    </div>
  )
}
