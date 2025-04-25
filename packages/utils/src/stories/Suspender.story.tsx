import styles from './Story.module.scss'

export const SuspenderStory = () => {
  return (
    <div className={styles.story}>
      <h4> Suspender </h4>
      <code> {'<Suspender path="../pages" pageName="Dashboard" />'}</code>
      <h5>
        Load a page by its path and name when route is calling it using lazy loading and default
        Loader
      </h5>
      {/* <Suspender path='../../stories/extra/Dashboard.tsx' /> */}
    </div>
  )
}
