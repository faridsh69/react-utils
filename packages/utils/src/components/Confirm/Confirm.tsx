import { useCallback, useEffect, useState } from 'react'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { Modal } from 'components/Modal/Modal'
import { IMAGE_URLS } from 'constants/constants'
import { ColorsEnum, FontsEnum, IconsEnum, VariantsEnum } from 'enums/enums'
import { useTrans } from 'hooks/useTrans'

import { ConfirmProps } from './Confirm.types'
import styles from './Confirm.module.scss'

export const Confirm = (props: ConfirmProps) => {
  const {
    label,
    subLabel,
    imageSrc,
    color = ColorsEnum.Red,
    onConfirm,
    onCancel,
    isOpen: propIsOpen,
    setIsOpen: propSetIsOpen,
  } = props

  const { t } = useTrans()

  const [isOpen, setIsOpen] = useState(propIsOpen)

  useEffect(() => {
    if (propIsOpen !== isOpen) setIsOpen(propIsOpen)
  }, [propIsOpen])

  const handleSetIsOpen = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen)
    propSetIsOpen?.(isOpen)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
    onCancel?.()
  }, [propSetIsOpen, onCancel])

  const onConfirmClick = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
    onConfirm?.()
  }, [propSetIsOpen, onConfirm])

  const DEFAULT_LABELS = {
    [ColorsEnum.Red]: t('Are you sure you want to delete this item permanently?'),
    [ColorsEnum.Green]: t('Are you sure you want to save this item?'),
    [ColorsEnum.Blue]: t('Are you sure you want to update this item?'),
    [ColorsEnum.Orange]: t('Are you sure you want to do this action?'),
  }

  const DEFAULT_IMAGES = {
    [ColorsEnum.Red]: IMAGE_URLS.trash,
    [ColorsEnum.Green]: IMAGE_URLS.ok,
    [ColorsEnum.Blue]: IMAGE_URLS.ok,
    [ColorsEnum.Orange]: IMAGE_URLS.ok,
  }

  const isDeleteConfirmation = color === ColorsEnum.Red

  return (
    <Modal
      hideHeader
      isOpen={isOpen}
      setIsOpen={handleSetIsOpen}
      actionsCenter={true}
      body={
        <div className={styles.body}>
          {/* @ts-ignore */}
          <Image src={imageSrc || DEFAULT_IMAGES[color]} alt='image' width={250} />
          <Label
            // @ts-ignore
            label={label || DEFAULT_LABELS[color]}
            hasError={isDeleteConfirmation}
            font={FontsEnum.Header20}
            linesCount={3}
          />
          <Label label={subLabel || t('This process cannot be undone!')} font={FontsEnum.Text14} />
        </div>
      }
      actions={[
        {
          label: t('Cancel'),
          icon: IconsEnum.Cancel,
          onClick: handleCloseModal,
          variant: VariantsEnum.Light,
        },
        {
          label: isDeleteConfirmation ? t('Delete') : t('Confirm'),
          icon: IconsEnum.Ok,
          onClick: onConfirmClick,
          variant: VariantsEnum.Dark,
          color,
        },
      ]}
    />
  )
}
