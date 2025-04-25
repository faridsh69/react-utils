import { Loader } from 'components/Loader/Loader'

import styles from './Story.module.scss'

export const LoaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>14 Loader </h4>
      <code>{'<Loader title="Loading users..." description="Please wait" />'}</code>
      <h5>A loader comblined with title text</h5>
      <Loader />
    </div>
  )
}
