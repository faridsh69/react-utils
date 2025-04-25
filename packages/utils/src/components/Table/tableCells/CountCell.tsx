import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

import { CountCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const CountCell = (props: CountCellProps) => {
  const { label = 0, subLabel, icon, bold } = props

  return (
    <div className={styles.tdCell}>
      <Icon icon={icon} className={styles.cellIcon} />
      <Label label={label} font={bold ? FontsEnum.Header12 : FontsEnum.Text12} />
      <Label label={subLabel} disabled={bold} />
    </div>
  )
}
