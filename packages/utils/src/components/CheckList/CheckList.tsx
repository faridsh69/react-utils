import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { Label } from 'components/Label/Label'
import { DirectionsEnum, FontsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

import { CheckListProps } from './CheckList.types'
import styles from './CheckList.module.scss'

export const CheckList = (props: CheckListProps) => {
  const {
    options = [],
    value: propsValue = [],
    onChange,
    size = SizesEnum.M,
    direction = DirectionsEnum.Horizontal,
    label,
    required,
    hasError,
    hint,
    hintZIndex,
    disabled,
    background = false,
    width,
  } = props

  const [value, setValue] = useState<OptionValueType[]>(propsValue)

  useEffect(() => {
    setValue(prevValue => (propsValue === prevValue ? prevValue : propsValue))
  }, [propsValue])

  const onChangeHandler = useCallback(
    (val: OptionValueType) => {
      const newVal = value.includes(val) ? value?.filter?.(v => v !== val) : [...value, val]

      setValue(newVal || [])
      onChange?.(newVal || [])
    },
    [value, onChange],
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
              <Checkbox
                key={option.label}
                checked={value?.includes?.(option.value)}
                size={size}
                onChange={() => onChangeHandler(option.value)}
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
