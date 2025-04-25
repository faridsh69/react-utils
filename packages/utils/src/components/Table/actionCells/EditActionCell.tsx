import { IconsEnum } from 'enums/enums'

import { ActionCellProps } from '../Table.types'
import { ActionCellWrapper } from './ActionCellWrapper'

export const EditActionCell = (props: ActionCellProps) => {
  return <ActionCellWrapper {...props} icon={IconsEnum.Edit} />
}
