import { forwardRef, useState } from 'react'
import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { SizesEnum } from 'enums/enums'
import { getUniqueId } from 'helpers/helpers'

import { CheckboxProps } from './Checkbox.types'
import styles from './Checkbox.module.scss'

export const Checkbox = forwardRef<HTMLInputElement | null, CheckboxProps>((props, ref) => {
  const {
    checked,
    onChange,
    label,
    disabled = false,
    required = false,
    hasError = false,
    width,
    hint = '',
    hintZIndex = 1,
    size = SizesEnum.M,
  } = props

  const [htmlFor] = useState(getUniqueId())

  return (
    <div className={clsx(styles.wrapper, styles[`size-${size}`])} style={{ width }}>
      <input
        type='checkbox'
        checked={!!checked}
        onChange={e => onChange?.(e.target.checked)}
        className={styles.field__checkbox}
        id={htmlFor}
      />
      <Label
        label={label}
        required={required}
        hasError={hasError}
        disabled={disabled}
        hint={hint}
        hintZIndex={hintZIndex}
        htmlFor={htmlFor}
      />
    </div>
  )
})
