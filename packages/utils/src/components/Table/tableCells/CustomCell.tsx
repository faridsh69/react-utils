import { CustomCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const CustomCell = (props: CustomCellProps) => {
  const { children } = props

  return <div className={styles.custom}>{children}</div>
}
