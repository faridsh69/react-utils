import { clsx } from 'clsx'
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

export const ValidationCollapsed = (props: TypeFormProgress) => {
  const { all, invalids: propInvalids, showValidations = true } = props

  const invalids = useDebounceValue(propInvalids, DEFAULT_VALIDATION_DELAY)

  if (!showValidations) return <></>

  if (invalids === FORM_DEFAULT_INVALIDS) {
    return <Skeleton height={31} />
  }

  const { isSuccess, icon, color } = getValidationBarData(all, invalids)

  return (
    <div
      className={clsx(
        styles.validationBar,
        isSuccess ? styles.validationCollapseSuccess : styles.validationCollapseDanger,
      )}
    >
      <div className={styles.flexRow}>
        <Icon icon={icon} style={{ color: color }} />
        <Label
          label={isSuccess ? 'Correct' : `${invalids} errors`}
          color={color}
          font={FontsEnum.Text14}
        />
      </div>
    </div>
  )
}
