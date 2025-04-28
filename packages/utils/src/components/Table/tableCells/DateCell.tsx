import { Chip } from 'components/Chip/Chip'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { IconsEnum, SizesEnum } from 'enums/enums'
import { getDiffTimeColor, getGermanDate, getRelativeTime } from 'helpers/dateHelpers'

import { TABLE_NO_DATA } from '../Table.constants'
import { DateCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const DateCell = (props: DateCellProps) => {
  const { label = '', icon = IconsEnum.Calendar, showDateDiff = true, showDate = true } = props

  const diff = getRelativeTime(label)
  const date = getGermanDate(label)
  const color = getDiffTimeColor(label)

  return (
    <div className={styles.tdCell}>
      <Icon icon={icon} className={styles.cellIcon} />
      {showDate && <Label label={date || TABLE_NO_DATA} />}
      {label && showDateDiff && <Chip label={diff} size={SizesEnum.S} color={color} />}
    </div>
  )
}
