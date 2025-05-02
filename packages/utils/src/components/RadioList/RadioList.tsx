import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { Radio } from 'components/Radio/Radio'
import { DirectionsEnum, FontsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

import { RadioListProps } from './RadioList.types'
import styles from './RadioList.module.scss'

export const RadioList = (props: RadioListProps) => {
  const {
    options = [],
    value: propsValue,
    onChange,
    size = SizesEnum.M,
    direction = DirectionsEnum.Horizontal,
    label,
    required,
    hasError,
    hint,
    hintZIndex,
    disabled,
    background = true,
    width,
  } = props

  const [value, setValue] = useState<OptionValueType>(propsValue)

  useEffect(() => {
    setValue(prevValue => (propsValue === prevValue ? prevValue : propsValue))
  }, [propsValue])

  const onChangeHandler = useCallback(
    (newVal: OptionValueType) => {
      setValue(newVal)
      onChange?.(newVal)
    },
    [onChange],
  )

  return (
    <div className={styles.field} style={{ width }}>
      <Label
        label={label}
        font={FontsEnum.Header12}
        required={required}
        hasError={hasError}
        hint={hint}
        hintZIndex={hintZIndex}
        disabled={disabled}
      />
      <div
        className={clsx(
          styles.wrapper,
          styles[`size-${size}`],
          styles[direction],
          background && styles.background,
        )}
      >
        {options.map(option => {
          return (
            <div key={option.label}>
              <Radio
                key={option.label}
                checked={value === option.value}
                size={size}
                onClick={() => onChangeHandler(option.value)}
                label={option.label}
                disabled={disabled}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
