import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useClickOutside } from 'hooks/useClickOutside'
import { createPortal } from 'react-dom'

import { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'

export const Modal = (props: ModalProps) => {
  const {
    title,
    body,
    actions = [],
    zIndex = ZINDEXES.modal,
    overlayZIndex = ZINDEXES.modalOverlay,
    isOpen: propIsOpen = true,
    setIsOpen: propSetIsOpen,
    bodyPadding = false,
    hideHeader = false,
    actionsCenter = false,
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen !== isOpen) setIsOpen(propIsOpen)
  }, [propIsOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
  }, [propSetIsOpen])

  const clickoutsideRef = useClickOutside(handleClose, isOpen)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return <></>

  return createPortal(
    <div className={styles.overlay} style={{ zIndex: overlayZIndex }}>
      <div className={styles.modal} style={{ zIndex }} ref={clickoutsideRef}>
        <div className={styles.main}>
          {!hideHeader && (
            <div className={styles.header}>
              <div className={styles.title}>
                <Label label={title} font={FontsEnum.Header22} />
              </div>
              <div>
                <Button
                  variant={VariantsEnum.Ghost}
                  size={SizesEnum.L}
                  icon={IconsEnum.Cancel}
                  onClick={handleClose}
                />
              </div>
            </div>
          )}
          <div className={clsx(styles.body, bodyPadding && styles.bodyPadding)}>{body}</div>
          {!!actions.length && (
            <div className={clsx(styles.footer, actionsCenter && styles.actionsCenter)}>
              {actions.map(action => {
                return (
                  <div key={action.label}>
                    <Button {...action} />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}
