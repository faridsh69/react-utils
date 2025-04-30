import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { DEFAULT_VALIDATION_DELAY } from 'constants/constants'
import { FontsEnum } from 'enums/enums'
import { useDebounceValue } from 'hooks/useDebounceValue'
import Skeleton from 'react-loading-skeleton'

import { FORM_DEFAULT_INVALIDS } from '../Form.constants'
import { getValidationBarData } from '../Form.helpers'
import { TypeFormProgress } from '../Form.types'
import styles from '../Form.module.scss'

export const ValidationBar = (props: TypeFormProgress) => {
  const { all, invalids: propInvalids, showValidations } = props

  const invalids = useDebounceValue(propInvalids, DEFAULT_VALIDATION_DELAY)

  if (!showValidations) return <></>
  if (invalids === FORM_DEFAULT_INVALIDS) {
    return (
      <div style={{ paddingBottom: 15 }}>
        <Skeleton height={35} />
      </div>
    )
  }

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
