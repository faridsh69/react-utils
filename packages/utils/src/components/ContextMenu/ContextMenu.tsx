import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Popover } from 'components/Popover/Popover'
import { ZINDEXES } from 'constants/constants'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'

import { ContextMenuProps } from './ContextMenu.types'
import { Menu } from './Menu'
import { Trigger } from './Trigger'
import styles from './ContextMenu.module.scss'

export const ContextMenu = (props: ContextMenuProps) => {
  const {
    triggerOnAction = ActionsEnum.OnClick,
    showAtClickPoint = false,
    triggerButtonProps = {},
    triggerNode,
    options = [],
    disabled = false,
    placement = PlacementsEnum.BottomStart,
    zIndex = ZINDEXES.contextMenu,
    offset: propsOffset = 4,
    isOpen: propIsOpen = false,
    setIsOpen: propSetIsOpen,
    width,
  } = props

  const isActionRightClick = triggerOnAction === ActionsEnum.OnContextMenu || showAtClickPoint

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen === isOpen) return

    setIsOpen(propIsOpen)
  }, [propIsOpen])

  useEffect(() => {
    if (propIsOpen === isOpen) return

    propSetIsOpen?.(isOpen)
  }, [isOpen])

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
  }, [propSetIsOpen])

  return (
    <Popover
      placement={placement}
      openOnAction={triggerOnAction}
      disabled={disabled}
      zIndex={zIndex}
      offset={isActionRightClick ? 0 : propsOffset}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      overlay={
        <Menu options={options} handleCloseMenu={handleCloseMenu} width={width} zIndex={zIndex} />
      }
    >
      <div className={clsx(styles.triggerWrapper)}>
        <Trigger
          triggerNode={triggerNode}
          triggerButtonProps={triggerButtonProps}
          isOpen={isOpen}
          disabled={disabled}
        />
      </div>
    </Popover>
  )
}
