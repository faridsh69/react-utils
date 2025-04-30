import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { ColorsEnum, SizesEnum, VariantsEnum } from 'enums/enums'

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
    color = ColorsEnum.Blue,
  } = props

  const colorStyles = {
    '--button-light': color,
    '--button-dark': color.replace('light', 'dark'),
    '--button-transparent': color.replace('light', 'transparent'),
  }

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
      // @ts-ignore
      style={{ ...colorStyles }}
    >
      <Icon icon={icon} />
      {label}
    </button>
  )
}
