import { Fragment } from 'react'
import { FloatingPortal } from '@floating-ui/react'
import { clsx } from 'clsx'
import { PlacementsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useDebounceValue } from 'hooks/useDebounceValue'
import { useToggle } from 'hooks/useToggle'

import { useTooltipFloating } from './hooks/useTooltipFloating'
import { getRefrenceWrapper } from './Tooltip.helpers'
import { TooltipProps } from './Tooltip.types'
import styles from './Tooltip.module.scss'

export const Tooltip = (props: TooltipProps) => {
  const {
    children,
    overlay,
    disabled = false,
    mouseEnterDelay = 0.3,
    size = SizesEnum.S,
    variant = VariantsEnum.Dark,
    placement: propPlacement = PlacementsEnum.Top,
    zIndex = 1,
  } = props

  const { refs, floatingStyles, arrowRef, arrowStyles } = useTooltipFloating(propPlacement)

  const { isOpen, handleOpen, handleClose } = useToggle(false)
  const debouncedIsOpen = useDebounceValue(isOpen)

  if (disabled || !overlay || !children) return <>{children}</>

  const showTooltip = isOpen || debouncedIsOpen

  const refrenceProps = {
    ref: refs.setReference,
    onMouseEnter: handleOpen,
    onFocus: handleOpen,
    onMouseLeave: handleClose,
    onBlur: handleClose,
  }
  const wrapperChildren = getRefrenceWrapper(children, refrenceProps)

  return (
    <Fragment>
      {wrapperChildren}
      {showTooltip && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className={clsx(
              styles.tooltip,
              styles[`size-${size}`],
              styles[`variant-${variant}`],
              disabled && styles.disabled,
            )}
            style={{
              animationDelay: `${mouseEnterDelay}s`,
              zIndex,
              ...floatingStyles,
            }}
          >
            {overlay}
            <div ref={arrowRef} className={styles.arrow} style={arrowStyles}>
              <div className={styles.innerArrow} />
            </div>
          </div>
        </FloatingPortal>
      )}
    </Fragment>
  )
}
