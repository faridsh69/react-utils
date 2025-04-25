import { ReactNode } from 'react'
import { ChipProps } from 'components/Chip/Chip.types'
import { ContextMenuOptionType } from 'components/ContextMenu/ContextMenu.types'
import { SelectProps } from 'components/Select/Select.types'
import { ColorsEnum, FontsEnum, IconsEnum } from 'enums/enums'

import { TableCellComponents, TableSeparators } from './Table.enums'

type ID = string | number
type VALUE = string | number | null | undefined

export type TableColumn = {
  id: ID
  label?: VALUE
  icon?: IconsEnum
  component?: TableCellComponents
  separator?: TableSeparators
  isPrimary?: boolean
  widthConstraints?: {
    min?: number | string
    optimal?: number | string
    max?: number | string
  }
  sortingFn?: (a: VALUE, b: VALUE) => number
  isSortable?: boolean
  isDraggable?: boolean
}
export type TableRow = {
  id: ID
  cells: TableCell[]
}

export type TableProps = {
  columns: TableColumn[]
  rows: TableRow[]
  height?: number | string
  insideForm?: boolean // We need to add darker background color to td and th

  isLoading?: boolean
  prefixCell?: {
    show?: boolean
    width?: number | string
  }
}

export type TableCellWrapperProps = {
  children?: ReactNode
  icon?: IconsEnum | null
  iconColor?: ColorsEnum
  onClick?: () => void
  disabled?: boolean
}

export type TableCell = {
  columnId: ID
  component?: TableCellComponents
  props: TableCellComponentProps
}

export type TableCellComponentProps =
  | TitleCellProps
  | CountCellProps
  | PriceCellProps
  | StatusCellProps
  | DateCellProps
  | ChipsCellProps
  | EmailCellProps
  | PhoneCellProps
  | MoreActionCellProps
  | ActionCellProps
  | CustomCellProps
  | FileCellProps
  | AvatarCellProps
  | SelectCellProps

export type TitleCellProps = {
  label?: VALUE
  subLabel?: VALUE
  color?: ColorsEnum
  backgroundColor?: ColorsEnum
}

export type CountCellProps = {
  label?: VALUE
  subLabel?: VALUE
  icon?: IconsEnum
  bold?: boolean
}

export type StatusCellProps = {
  label?: VALUE
  color?: ColorsEnum
  colorEnum?: ColorsEnum
}

export type PriceCellProps = {
  label?: VALUE
  subLabel?: VALUE
  icon?: null | IconsEnum
  bold?: boolean
  font?: FontsEnum
  color?: ColorsEnum
  textAlignRight?: boolean
}

export type PhoneCellProps = {
  label?: VALUE
  icon?: null | IconsEnum
}

export type EmailCellProps = {
  label?: VALUE
  icon?: null | IconsEnum
}

export type DateCellProps = {
  label?: VALUE
  icon?: null | IconsEnum
  showDate?: boolean
  showDateDiff?: boolean
}

export type ChipsCellProps = {
  chips?: ChipProps[]
}

export type AvatarCellProps = {
  label?: VALUE
  subLabel?: VALUE
  avatar?: string
  bold?: boolean
}

export type FileCellProps = {
  documents?: { name: string; type: string }[]
  onViewClicked?: any
  onDownloadClicked?: any
}

export type SelectCellProps = {
  selectProps?: SelectProps
}

export type CustomCellProps = {
  children?: ReactNode
}

export type ActionCellProps = {
  onClick?: () => void
  icon?: null | IconsEnum
  iconColor?: ColorsEnum
  disabled?: boolean
}

export type MoreActionCellProps = {
  disabled?: boolean
  options?: ContextMenuOptionType[]
  width?: string | number
}

export type ColumnProps = {
  columns: TableColumn[]
  column: TableColumn
  columnIndex: number
}

export type CellProps = {
  columns: TableColumn[]
  column: TableColumn
  cells: TableCell[]
  columnIndex: number
}
