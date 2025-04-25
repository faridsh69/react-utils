import { Button } from 'components/Button/Button'
import { TextInput } from 'components/TextInput/TextInput'
import { useTrans } from 'hooks/useTrans'

import { SelectTriggerComponents } from '../Select.enums'
import { TriggerComponentops } from '../Select.types'
import styles from '../Select.module.scss'

export const Trigger = (props: TriggerComponentops) => {
  const {
    triggerSelectedOption,
    size,
    disabled,
    trigger,
    isActive,
    handleClearInput,
    width,
    clearable,
    label,
    placeholder,
    required,
    hasError,
    hint,
    hintZIndex,
  } = props

  const { t } = useTrans()

  const trigerLabel = trigger.props?.label || label

  if (trigger.component === SelectTriggerComponents.Button) {
    return (
      <Button
        {...trigger.props}
        label={trigerLabel}
        disabled={disabled}
        size={size}
        active={isActive}
        hasIndicator={!!triggerSelectedOption?.label}
      />
    )
  }

  const trigerPlaceholder = trigger.props?.placeholder || placeholder || t('Please select')

  return (
    <div className={styles.trigger} style={{ width }}>
      <TextInput
        {...trigger.props}
        label={trigerLabel}
        placeholder={trigerPlaceholder}
        value={triggerSelectedOption.label}
        icon={triggerSelectedOption.icon}
        avatar={triggerSelectedOption.avatar}
        iconColor={triggerSelectedOption.color}
        disabled={disabled}
        clearable={clearable}
        onClear={handleClearInput}
        active={isActive}
        size={size}
        required={required}
        hasError={hasError}
        hint={hint}
        hintZIndex={hintZIndex}
        withHandle={true}
        readOnly={true}
      />
    </div>
  )
}
