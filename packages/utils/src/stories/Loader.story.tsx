import styles from './Story.module.scss'

export const LoaderStory = () => {
  return (
    <div className={styles.story}>
      <div className={styles.loadingContainer}>
        Loading
        <span className={styles.loadingIcon}>XXX</span>
      </div>
    </div>
  )
}
