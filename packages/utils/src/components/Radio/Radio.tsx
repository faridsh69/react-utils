import { useCallback } from 'react'
import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { FontsEnum, SizesEnum } from 'enums/enums'

import { RadioProps } from './Radio.types'
import styles from './Radio.module.scss'

export const Radio = (props: RadioProps) => {
  const {
    checked,
    onClick,
    disabled,
    label,
    hasError,
    required,
    hint,
    hintZIndex,
    size = SizesEnum.M,
  } = props

  const onclickHandler = useCallback(() => {
    if (disabled) return

    onClick?.()
  }, [disabled, onClick])

  return (
    <div className={clsx(styles.wrapper, styles[`size-${size}`])}>
      <input
        type='radio'
        checked={checked}
        disabled={disabled}
        onChange={onclickHandler}
        className={styles.radio}
      />
      <Label
        label={label}
        font={FontsEnum.Text14}
        required={required}
        hasError={hasError}
        hint={hint}
        hintZIndex={hintZIndex}
        disabled={disabled}
        className={styles.label}
        onClick={onclickHandler}
      />
    </div>
  )
}
