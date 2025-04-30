import { clsx } from 'clsx'
import { Button } from 'components/Button/Button'
import { DirectionsEnum } from 'enums/enums'

import { TabItemsProps } from './TabItems.types'
import styles from './TabItems.module.scss'

export const TabItems = (props: TabItemsProps) => {
  const {
    options = [],
    onChange,
    value,
    background = false,
    direction = DirectionsEnum.Horizontal,
    title = '',
  } = props

  return (
    <div className={clsx(styles.wrapper, background && styles.background, styles[direction])}>
      {direction === DirectionsEnum.Vertical && !!title && (
        <div className={styles.title}>{title}</div>
      )}
      {options.map(option => {
        const { label, value: optionValue, icon, disabled } = option

        return (
          <Button
            key={optionValue}
            active={value === optionValue}
            disabled={disabled}
            onClick={() => onChange?.(optionValue)}
            icon={icon}
            label={label}
          />
        )
      })}
    </div>
  )
}
