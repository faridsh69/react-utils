import { useCallback } from 'react'
import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ColorsEnum, IconsEnum } from 'enums/enums'

import { MenuOptionProps } from './ContextMenu.types'
import { Submenu } from './Submenu'
import styles from './ContextMenu.module.scss'

export const MenuOption = (props: MenuOptionProps) => {
  const { option, handleCloseMenu, canHasSubmenu, isLast = false, zIndex } = props

  const {
    icon,
    label,
    onClick,
    color: propColor,
    isSeparator,
    disabled,
    isSelected,
    options: subOptions,
  } = option

  const color = isSelected ? ColorsEnum.Blue : propColor

  const handleClick = useCallback(() => {
    if (disabled) return

    onClick?.()

    if (subOptions?.length) return

    handleCloseMenu?.()
  }, [onClick, handleCloseMenu, subOptions, disabled])

  if (subOptions?.length && canHasSubmenu) {
    return (
      <Submenu
        subOptions={subOptions}
        option={option}
        handleCloseMenu={handleCloseMenu}
        zIndex={zIndex}
        isLast={isLast}
      />
    )
  }

  return (
    <button
      key={label}
      disabled={disabled}
      onClick={handleClick}
      className={clsx(
        styles.menuOption,
        isLast && styles.isLast,
        styles[`color-${color}`],
        isSeparator && styles.seperator,
        isSeparator && !label && styles.seperatorNoLabel,
      )}
    >
      <div className={styles.labelWrapper}>
        <Label label={label} />
      </div>
      <div className={styles.floatRight}>
        {isSelected && <Icon icon={icon} />}
        {subOptions?.length && <Icon icon={IconsEnum.ArrowRight} />}
      </div>
    </button>
  )
}
