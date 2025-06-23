import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

import { getValidationBarData } from '../Form.helpers'
import { TypeFormProgress } from '../Form.types'
import styles from '../Form.module.scss'

export const ValidationBar = (props: TypeFormProgress) => {
  const { all, invalids } = props

  const { isSuccess, icon, color, percentage } = getValidationBarData(all, invalids)

  return (
    <div
      className={clsx(
        styles['col-12'],
        styles.validationBar,
        isSuccess ? styles.validationSuccess : styles.validationDanger,
      )}
    >
      <div className={styles.flexRow}>
        <Icon icon={icon} style={{ fill: color }} />
        <Label
          label={isSuccess ? 'Completed' : `${invalids} errors`}
          color={color}
          font={FontsEnum.Text16}
        />
      </div>
      <div className={styles.flexRow}>
        <div className={styles.bar}>
          <div
            className={styles.filledBar}
            style={{ backgroundColor: color, width: `${percentage}%` }}
          />
        </div>
        <Label label={`${percentage}%`} color={color} font={FontsEnum.Header14} />
      </div>
    </div>
  )
}
