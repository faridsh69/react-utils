import { clsx } from 'clsx'

import { CharacterCounterProps } from './Textarea.types'
import styles from './Textarea.module.scss'

export const CharacterCounter = (props: CharacterCounterProps) => {
  const { valueLength = 0, min, max, invalidLength = false } = props

  if (!min && !max) return <></>

  return (
    <div className={styles.counter}>
      <span className={clsx(styles.count, invalidLength && styles.inValid)}>{valueLength}</span>
      <span className={styles.limit}>
        ({min}-{max})
      </span>
    </div>
  )
}
