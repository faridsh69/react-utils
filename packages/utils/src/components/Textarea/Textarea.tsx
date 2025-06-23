import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { FontsEnum, PlacementsEnum } from 'enums/enums'

import { CharacterCounter } from './CharacterCounter'
import { TextareaSizes } from './Textarea.enums'
import { TextareaProps } from './Textarea.types'
import styles from './Textarea.module.scss'

export const Textarea = (props: TextareaProps) => {
  const {
    value = '',
    onChange,
    onBlur,
    label,
    disabled = false,
    size = TextareaSizes.M,
    required,
    hasError,
    hint,
    hintZIndex,
    min = 0,
    max,
    width,
    placeholder,
    isResizable = false,
    errorText,
    wrapperClassName,
    ...textareaProps
  } = props

  // @ts-ignore
  const valueLength = value?.trim?.()?.length
  const invalidLength = valueLength < min || (!!max && valueLength > max)
  const invalid = hasError || !!errorText || invalidLength

  return (
    <div className={clsx(styles.field, wrapperClassName)} style={{ width }}>
      <div>
        <Label
          label={label}
          font={FontsEnum.Header12}
          required={required}
          hasError={invalid}
          hint={hint}
          hintZIndex={hintZIndex}
          disabled={disabled}
        />
      </div>
      <div
        className={clsx(
          styles.wrapper,
          styles[`size-${size}`],
          disabled && styles.disabled,
          !isResizable && styles.resizeNone,
        )}
      >
        <textarea
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          // invalid={invalid}
          className={styles.textarea}
          {...textareaProps}
        />
        <CharacterCounter
          valueLength={valueLength}
          invalidLength={invalidLength}
          min={min}
          max={max}
        />
      </div>
      {errorText?.trim() && (
        <Label
          label={errorText}
          hasError
          font={FontsEnum.Text14}
          tooltipPlacement={PlacementsEnum.Bottom}
        />
      )}
    </div>
  )
}
