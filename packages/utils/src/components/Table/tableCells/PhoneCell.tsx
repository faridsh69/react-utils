import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { IconsEnum } from 'enums/enums'

import { TABLE_NO_DATA } from '../Table.constants'
import { PhoneCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const PhoneCell = (props: PhoneCellProps) => {
  const { label = TABLE_NO_DATA, icon = IconsEnum.Phone } = props

  return (
    <div className={styles.tdCell}>
      <Icon className={styles.cellIcon} icon={icon} />
      <a href={`tel:${label}`} target='_blank' rel='noreferrer' className={styles.link}>
        <Label label={label} />
      </a>
    </div>
  )
}
