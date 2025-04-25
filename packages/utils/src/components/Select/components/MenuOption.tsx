import { useCallback } from 'react'
import { clsx } from 'clsx'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { BOLD_FONTS_SIZES_MAP, FONTS_SIZES_MAP } from 'constants/constants'
import { IconsEnum, SizesEnum } from 'enums/enums'

import { MenuOptionProps } from '../Select.types'
import styles from '../Select.module.scss'

export const MenuOption = (props: MenuOptionProps) => {
  const { option, onClick, index, multiple, size = SizesEnum.M } = props

  const { label, icon, color, disabled, isSelected, isGroupOption } = option

  const handleClick = useCallback(() => {
    onClick(option)
  }, [onClick, option])

  const hasOkIcon = isSelected && !multiple

  if (isGroupOption) {
    return (
      <div className={clsx(styles.group, !!index && styles.hasBorderTop)}>
        <Label label={label} font={FONTS_SIZES_MAP[size]} active />
      </div>
    )
  }

  return (
    <div className={clsx(styles.option, disabled && styles.disabled)} onClick={handleClick}>
      <Icon icon={icon} style={{ color: color }} />

      <div className={styles.label}>
        <Label
          label={label}
          font={isSelected ? BOLD_FONTS_SIZES_MAP[size] : FONTS_SIZES_MAP[size]}
          disabled={disabled}
          mouseEnterDelay={1}
        />
      </div>

      {multiple && <Checkbox checked={!!isSelected} size={size} color={color} />}

      {hasOkIcon && <Icon icon={IconsEnum.Ok} className={styles.okIcon} />}
    </div>
  )
}
