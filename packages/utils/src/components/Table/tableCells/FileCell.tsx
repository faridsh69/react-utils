import { clsx } from 'clsx'
import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { IconsEnum, PlacementsEnum } from 'enums/enums'
import { useTrans } from 'hooks/useTrans'

import { FileCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const FileCell = (props: FileCellProps) => {
  const { documents = [], onViewClicked, onDownloadClicked } = props

  const { t } = useTrans()

  const options = [
    {
      icon: IconsEnum.View,
      label: 'view',
      onClick: onViewClicked,
    },
    {
      icon: IconsEnum.Download,
      label: 'download',
      onClick: onDownloadClicked,
    },
  ]

  const noDoc = !documents.length
  const oneDoc = documents.length === 1
  const multiDoc = documents.length > 1

  return (
    <ContextMenu
      triggerNode={
        <div className={clsx(styles.custom, styles.fileCellWrapper)}>
          {noDoc && (
            <>
              <Icon icon={IconsEnum.File} />
              <Label label={t('no file uploaded')} />
            </>
          )}

          {oneDoc && (
            <>
              <Label label={documents[0].name} />
            </>
          )}

          {multiDoc && (
            <>
              <Icon icon={IconsEnum.File} className='noFileIcon' />
              <Label label={`${documents.length} ${t('files')}`} />
            </>
          )}
        </div>
      }
      options={options}
      width={200}
      zIndex={ZINDEXES.contextMenu}
      offset={12}
      placement={PlacementsEnum.BottomStart}
    />
  )
}
