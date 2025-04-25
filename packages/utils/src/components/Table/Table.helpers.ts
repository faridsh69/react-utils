import { CustomActionCell } from 'components/Table/actionCells/CustomActionCell'
import { IconsEnum } from 'enums/enums'

import { CallActionCell } from './actionCells/CallActionCell'
import { DeleteActionCell } from './actionCells/DeleteActionCell'
import { EditActionCell } from './actionCells/EditActionCell'
import { EmailActionCell } from './actionCells/EmailActionCell'
import { MoreActionCell } from './actionCells/MoreActionCell'
import { ViewActionCell } from './actionCells/ViewActionCell'
import { TableCellComponents, TableSeparators } from './Table.enums'
import { TableCell, TableColumn, TitleCellProps } from './Table.types'
import { ChipsCell } from './tableCells/ChipsCells'
import { CountCell } from './tableCells/CountCell'
import { CustomCell } from './tableCells/CustomCell'
import { DateCell } from './tableCells/DateCell'
import { EmailCell } from './tableCells/EmailCell'
import { FileCell } from './tableCells/FileCell'
import { PhoneCell } from './tableCells/PhoneCell'
import { PriceCell } from './tableCells/PriceCell'
import { SelectCell } from './tableCells/SelectCell'
import { TitleCell } from './tableCells/TitleCell'

export const getCellComponent = (column?: TableColumn) => {
  const cells = {
    [TableCellComponents.Custom]: CustomCell,
    [TableCellComponents.Title]: TitleCell,
    [TableCellComponents.Count]: CountCell,
    [TableCellComponents.Price]: PriceCell,
    [TableCellComponents.Chips]: ChipsCell,
    [TableCellComponents.Date]: DateCell,
    [TableCellComponents.File]: FileCell,
    [TableCellComponents.Email]: EmailCell,
    [TableCellComponents.Phone]: PhoneCell,
    [TableCellComponents.Select]: SelectCell,
    [TableCellComponents.ViewAction]: ViewActionCell,
    [TableCellComponents.EditAction]: EditActionCell,
    [TableCellComponents.DeleteAction]: DeleteActionCell,
    [TableCellComponents.CustomAction]: CustomActionCell,
    [TableCellComponents.MoreAction]: MoreActionCell,
    [TableCellComponents.CallAction]: CallActionCell,
    [TableCellComponents.EmailAction]: EmailActionCell,
  }

  return column?.component && cells[column?.component] ? cells[column?.component] : TitleCell
}

export const getCellBackgroundColor = (column: TableColumn, cell?: TableCell) => {
  if (!cell || column.component !== TableCellComponents.Title) return undefined

  return (cell.props as TitleCellProps).backgroundColor
}

export const getHeaderIcon = (column?: TableColumn) => {
  const cells: any = {
    [TableCellComponents.ViewAction]: IconsEnum.View,
    [TableCellComponents.EditAction]: IconsEnum.Edit,
    [TableCellComponents.DeleteAction]: IconsEnum.Trash,
    [TableCellComponents.EmailAction]: IconsEnum.Email,
    [TableCellComponents.CallAction]: IconsEnum.Phone,
    [TableCellComponents.MoreAction]: IconsEnum.ThreeDots,
    [TableCellComponents.CustomAction]: column?.icon,
  }

  return column?.component && cells[column?.component] ? cells[column?.component] : null
}

export const getIsFirstActionCell = (
  columns: TableColumn[],
  columnIndex: number,
  column?: TableColumn,
) => {
  const nextCol = columns[columnIndex - 1]
  const isThisOneActionCell = getHeaderIcon(column)
  const isPrevOneActionCell = getHeaderIcon(nextCol)

  if (isThisOneActionCell && !isPrevOneActionCell) return true
}

export const getPositionRight = (columns: TableColumn[], columnIndex: number) => {
  return (columns.length - 1 - columnIndex) * 50
}

export const getIsSeparatorLine = (column?: TableColumn) => {
  return column?.separator === TableSeparators.line && !getHeaderIcon(column)
}

export const getIsSeparatorHalfLine = (column?: TableColumn) => {
  return column?.separator === TableSeparators.halfLine && !getHeaderIcon(column)
}
