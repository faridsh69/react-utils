import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { SizesEnum, VariantsEnum } from 'enums/enums'

import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export const Button = (props: ButtonProps) => {
  const {
    label,
    icon,
    onClick,
    variant = VariantsEnum.Light,
    size = SizesEnum.M,
    active = false,
    disabled = false,
    // color = ColorsEnum.Blue,
  } = props

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        active && styles.active,
      )}
    >
      <Icon icon={icon} />
      {label}
    </button>
  )
}
