import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { Icon } from 'components/Icon/Icon'
import { ZINDEXES } from 'constants/constants'
import { ActionsEnum, IconsEnum, PlacementsEnum } from 'enums/enums'

import { MoreActionCellProps } from '../Table.types'
import { ActionCellWrapper } from './ActionCellWrapper'
import styles from '../Table.module.scss'

export const MoreActionCell = (props: MoreActionCellProps) => {
  const { options = [], disabled, width = 200 } = props

  return (
    <ActionCellWrapper onClick={() => {}} disabled={disabled}>
      <ContextMenu
        options={options}
        disabled={disabled}
        triggerOnAction={ActionsEnum.OnClick}
        triggerNode={
          <div className={styles.actionCellWrapper}>
            <Icon icon={IconsEnum.ThreeDots} />
          </div>
        }
        width={width}
        zIndex={ZINDEXES.contextMenu}
        placement={PlacementsEnum.BottomEnd}
      />
    </ActionCellWrapper>
  )
}
