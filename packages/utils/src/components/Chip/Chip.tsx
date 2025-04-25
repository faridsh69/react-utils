import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ColorsEnum, IconsEnum, SizesEnum } from 'enums/enums'

import { ChipProps } from './Chip.types'
import styles from './Chip.module.scss'

export const Chip = (props: ChipProps) => {
  const {
    label,
    onClose,
    size = SizesEnum.M,
    icon: iconProps,
    color,
    backgroundColor: propBackgroundColor,
    width,
  } = props

  const defaultBackground = color ? '' : ColorsEnum.BlueTransparent
  const backgroundColor = propBackgroundColor || defaultBackground

  return (
    <div
      className={clsx(styles.wrapper, styles[`size-${size}`])}
      style={{ color, backgroundColor, width }}
    >
      {iconProps && <Icon icon={iconProps} size={size} className={styles.icon} />}
      <Label label={label} />
      {onClose && <Icon icon={IconsEnum.Cancel} size={size} onClick={onClose} />}
    </div>
  )
}
