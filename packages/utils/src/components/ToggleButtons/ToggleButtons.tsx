import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { DirectionsEnum, FontsEnum, SidesEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

import { ToggleButtonsProps } from './ToggleButtons.types'
import styles from './ToggleButtons.module.scss'

export const ToggleButtons = (props: ToggleButtonsProps) => {
  const {
    options = [],
    value: propsValue,
    onChange,
    size = SizesEnum.M,
    variant = VariantsEnum.Light,
    direction = DirectionsEnum.Horizontal,
    label,
    required,
    hasError,
    hint,
    hintZIndex = ZINDEXES.tooltip,
    disabled,
    sameWidthOptions = true,
  } = props

  const isHorizontal = direction === DirectionsEnum.Horizontal

  const [value, setValue] = useState<OptionValueType>(propsValue)

  useEffect(() => {
    setValue(prevValue => (prevValue === propsValue ? prevValue : propsValue))
  }, [propsValue])

  const onChangeHandler = useCallback(
    (value: OptionValueType) => {
      setValue(value)
      onChange?.(value)
    },
    [onChange],
  )

  const calculateNoRadius = useCallback(
    (index: number, optionsLength: number) => {
      if (optionsLength === 1) {
        return []
      }

      if (index === 0 && optionsLength !== 1) {
        return isHorizontal ? [SidesEnum.Right] : [SidesEnum.Bottom]
      }

      if (index === optionsLength - 1) {
        return isHorizontal ? [SidesEnum.Left] : [SidesEnum.Top]
      }

      return isHorizontal ? [SidesEnum.Left, SidesEnum.Right] : [SidesEnum.Top, SidesEnum.Bottom]
    },
    [isHorizontal],
  )

  return (
    <div className={styles.field}>
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
          sameWidthOptions && styles.sameWidthOptions,
          styles[direction],
        )}
      >
        {options.map((option, index) => {
          const noRadius = calculateNoRadius(index, options.length)

          return (
            <Button
              key={option.label}
              active={option.value === value}
              size={size}
              variant={variant}
              onClick={() => onChangeHandler(option.value)}
              label={option.label}
              icon={option.icon}
              noBorderRadius={noRadius}
              disabled={disabled}
            />
          )
        })}
      </div>
    </div>
  )
}
