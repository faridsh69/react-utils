import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { IconsEnum } from 'enums/enums'

import { TABLE_NO_DATA } from '../Table.constants'
import { EmailCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const EmailCell = (props: EmailCellProps) => {
  const { label = TABLE_NO_DATA, icon = IconsEnum.Mail } = props

  return (
    <div className={styles.tdCell}>
      <Icon icon={icon} className={styles.cellIcon} />
      <a href={`mailto:${label}`} target='_blank' rel='noreferrer' className={styles.link}>
        <Label label={label} />
      </a>
    </div>
  )
}
