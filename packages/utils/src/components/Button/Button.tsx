import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'

import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export const Button = (props: ButtonProps) => {
  const { label, variant, color, size, active, disabled, icon, onClick, noRadius } = props

  return (
    <button
      style={{ color, height: size }}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        styles[`color-${color}`],
        active && styles.active,
        noRadius && styles.noRadius,
      )}
    >
      <Icon icon={icon} />
      {label}
    </button>
  )
}
