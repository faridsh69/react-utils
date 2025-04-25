import { clsx } from 'clsx'

import { TotalRowProps } from './TotalRow.types'
import styles from './TotalRow.module.scss'

export const TotalRow = (props: TotalRowProps) => {
  const { children, active = false } = props

  return <div className={clsx(styles.totalRow, active && styles.active)}>{children}</div>
}
