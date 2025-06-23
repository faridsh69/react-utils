import clsx from 'clsx'

import styles from './Form.module.scss'

type TypeFormProgress = { all: number; invalids: number }

export const ValidationBar = (props: TypeFormProgress) => {
  const { all, invalids } = props

  const roundNumber = (num?: number, digits = 2) => {
    if (!num) return 0

    const unit = Math.pow(10, digits)

    return Math.round(num * unit) / unit
  }

  const getValidationBarData = (all: number, invalids: number) => {
    const valids = Math.max(0, all - invalids)
    const percentage = all ? roundNumber((valids / all) * 100, 0) : invalids ? 0 : 100
    const isSuccess = percentage === 100
    const color = isSuccess ? 'var(--success-light)' : 'var(--error-light)'

    return {
      percentage,
      isSuccess,
      color,
    }
  }

  const { isSuccess, color, percentage } = getValidationBarData(all, invalids)

  return (
    <div
      className={clsx(
        styles['col-12'],
        styles.validationBar,
        isSuccess ? styles.validationSuccess : styles.validationDanger,
      )}
    >
      <div className={styles.flexRow}>
        <span style={{ color }}>{isSuccess ? 'Completed' : `${invalids} errors`}</span>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.bar}>
          <div
            className={styles.filledBar}
            style={{ backgroundColor: color, width: `${percentage}%` }}
          />
        </div>
        <span style={{ color }}>{`${percentage}%`}</span>
      </div>
    </div>
  )
}
