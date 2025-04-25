import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

import { TitleCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const TitleCell = (props: TitleCellProps) => {
  const { label, subLabel, color } = props

  return (
    <div className={styles.titleCell} style={{ color }}>
      {label && <Label label={label} font={FontsEnum.Header12} />}
      <Label label={subLabel} />
    </div>
  )
}
