import { MenuProps } from './ContextMenu.types'
import { MenuOption } from './MenuOption'
import styles from './ContextMenu.module.scss'

export const Menu = (props: MenuProps) => {
  const { options = [], handleCloseMenu, width, zIndex } = props

  return (
    <div className={styles.menu} style={{ width, zIndex }}>
      {options.map((option, optionIndex) => {
        const isLast = optionIndex === options.length - 1

        return (
          <MenuOption
            zIndex={zIndex}
            key={optionIndex}
            option={option}
            isLast={isLast}
            handleCloseMenu={handleCloseMenu}
            canHasSubmenu={true}
          />
        )
      })}
    </div>
  )
}
