import { Popover } from 'components/Popover/Popover'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'

import { SubmenuProps } from './ContextMenu.types'
import { Menu } from './Menu'
import { MenuOption } from './MenuOption'

export const Submenu = (props: SubmenuProps) => {
  const { subOptions, option, handleCloseMenu, zIndex } = props

  return (
    <Popover
      placement={PlacementsEnum.RightStart}
      openOnAction={ActionsEnum.OnClick}
      disabled={false}
      zIndex={zIndex}
      offset={4}
      children={
        <MenuOption option={option} handleCloseMenu={handleCloseMenu} canHasSubmenu={false} />
      }
      overlay={<Menu options={subOptions} handleCloseMenu={handleCloseMenu} />}
    />
  )
}
