import { clsx } from 'clsx'

import {
  getCellBackgroundColor,
  getCellComponent,
  getHeaderIcon,
  getIsFirstActionCell,
  getIsSeparatorHalfLine,
  getIsSeparatorLine,
  getPositionRight,
} from '../Table.helpers'
import { CellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const Cell = (props: CellProps) => {
  const { columns, column, cells, columnIndex } = props

  const cell = cells.find(cell => cell.columnId === column.id)
  const CellComponent = getCellComponent(column)
  const HeaderIcon = getHeaderIcon(column)
  const separatorLine = getIsSeparatorLine(column)
  const separatorHalfLine = getIsSeparatorHalfLine(column)
  const isFirstActionCell = getIsFirstActionCell(columns, columnIndex, column)

  const positionRight = getPositionRight(columns, columnIndex)
  const { min, optimal, max } = column?.widthConstraints || {}
  const backgroundColor = getCellBackgroundColor(column, cell)

  return (
    <td
      className={clsx(
        styles.td,
        HeaderIcon && styles.tdAction,
        separatorLine && styles.separatorLine,
        separatorHalfLine && styles.separatorHalfLine,
      )}
      style={{
        right: HeaderIcon ? positionRight : undefined,
        backgroundColor: `${backgroundColor} !important`,
        minWidth: min || optimal,
        maxWidth: max,
      }}
      key={cell?.columnId}
    >
      {isFirstActionCell && <div className={styles.hasBoxShadow} />}

      <CellComponent {...cell?.props} />
    </td>
  )
}
