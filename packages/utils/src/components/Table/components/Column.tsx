import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

import { getHeaderIcon } from '../Table.helpers'
import { ColumnProps } from '../Table.types'
import styles from '../Table.module.scss'

export const Column = (props: ColumnProps) => {
  const { columns, column, columnIndex } = props

  const { id, label, isPrimary = false, widthConstraints } = column

  const headerIcon = getHeaderIcon(column)
  const { min, optimal, max } = widthConstraints || {}
  const rightCss = (columns.length - 1 - columnIndex) * 50

  return (
    <th
      key={id}
      className={clsx(styles.th, headerIcon && styles.thAction)}
      style={{
        right: headerIcon ? rightCss : undefined,
        minWidth: min || optimal,
        maxWidth: max,
      }}
    >
      {!headerIcon && (
        <div className={clsx(styles.thCell, styles.sortableCell)}>
          <Label
            label={label}
            mouseEnterDelay={0}
            forceTooltip
            font={isPrimary ? FontsEnum.Header12 : FontsEnum.Text12}
          />
        </div>
      )}

      {headerIcon && (
        <div className={clsx(styles.thCell, styles.actionCell)}>
          <Icon icon={headerIcon} />
        </div>
      )}
    </th>
  )
}
