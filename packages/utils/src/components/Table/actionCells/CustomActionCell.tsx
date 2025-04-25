import { ActionCellWrapper } from 'components/Table/actionCells/ActionCellWrapper'

import { ActionCellProps } from '../Table.types'

export const CustomActionCell = (props: ActionCellProps) => {
  return <ActionCellWrapper {...props} />
}
