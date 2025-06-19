import { Popover } from 'components/Popover/Popover'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'

import { SubmenuProps } from './ContextMenu.types'
import { Menu } from './Menu'
import { MenuOption } from './MenuOption'

export const Submenu = (props: SubmenuProps) => {
  const { subOptions, option, handleCloseMenu, zIndex, isLast } = props

  return (
    <Popover
      placement={PlacementsEnum.RightStart}
      openOnAction={ActionsEnum.OnClick}
      disabled={false}
      zIndex={zIndex}
      offset={4}
      overlay={<Menu options={subOptions} handleCloseMenu={handleCloseMenu} />}
    >
      <MenuOption
        option={option}
        handleCloseMenu={handleCloseMenu}
        canHasSubmenu={false}
        isLast={isLast}
      />
    </Popover>
  )
}
