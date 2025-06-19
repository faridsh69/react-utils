import { Fragment, MouseEvent, useCallback, useEffect, useState } from 'react'
import { FloatingPortal } from '@floating-ui/react'
import { clsx } from 'clsx'
import { ZINDEXES } from 'constants/constants'
import { ActionsEnum, PlacementsEnum } from 'enums/enums'
import { useClickOutside } from 'hooks/useClickOutside'
import { useFloatingUi } from 'hooks/useFloatingUi'

import { getMouseEventPosition, getRefrenceWrapper } from './Popover.helpers'
import { PopoverProps } from './Popover.types'
import styles from './Popover.module.scss'

export const Popover = (props: PopoverProps) => {
  const {
    children,
    overlay,
    placement: propPlacement = PlacementsEnum.BottomStart,
    openOnAction = ActionsEnum.OnClick,
    disabled = false,
    zIndex = ZINDEXES.popover,
    offset = 3,
    isOpen: propIsOpen = false,
    setIsOpen: propSetIsOpen,
  } = props

  const isActionRightClick = openOnAction === ActionsEnum.OnContextMenu

  const { refs, floatingStyles } = useFloatingUi(propPlacement, offset)

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen === isOpen) return

    setIsOpen(propIsOpen)
  }, [propIsOpen])

  const handleOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setIsOpen(true)
      propSetIsOpen?.(true)

      if (!isActionRightClick) return

      e?.preventDefault?.()
      refs.setPositionReference({
        getBoundingClientRect() {
          return getMouseEventPosition(e)
        },
      })
    },
    [propSetIsOpen, openOnAction],
  )

  const handleClose = useCallback(() => {
    setTimeout(() => {
      setIsOpen(false)
      propSetIsOpen?.(false)
    }, 0)
  }, [propSetIsOpen])

  const clickoutsideRef = useClickOutside(
    handleClose,
    isOpen,
    isActionRightClick ? 'mousedown' : 'mouseup',
  )

  if (disabled || !overlay || !children) return <>{children}</>

  const refrenceProps = {
    ref: refs.setReference,
    [openOnAction]: handleOpen,
  }
  const refrenceWrapper = getRefrenceWrapper(children, refrenceProps)
  const mountOverlay = isOpen

  return (
    <Fragment>
      {refrenceWrapper}
      {mountOverlay && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              zIndex,
            }}
            className={clsx(!isOpen && styles.isNotOpen)}
          >
            <div ref={clickoutsideRef}>{overlay}</div>
          </div>
        </FloatingPortal>
      )}
    </Fragment>
  )
}
