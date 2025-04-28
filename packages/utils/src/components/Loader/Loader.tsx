import { clsx } from 'clsx'
import { useTrans } from 'hooks/useTrans'

import { LoaderProps } from './Loader.types'
import styles from './Loader.module.scss'

export const Loader = (props: LoaderProps) => {
  const { t } = useTrans()
  const {
    label = t('The page is currently loading.'),
    subLabel = t('We appreciate your patience.'),
    size,
  } = props

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.loader, styles[`size-${size}`])}></div>

      <div className={styles.texts}>
        <b className={styles.loadingText}>{label}</b>
        <p className={styles.loadingText}>{subLabel}</p>
      </div>
    </div>
  )
}
