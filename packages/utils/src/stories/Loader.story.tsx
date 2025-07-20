import { useEffect } from 'react'

import { FaridPromise } from './extra/WritingPromise'
import styles from './Story.module.scss'

export const LoaderStory = () => {
  useEffect(() => {
    const usage = new FaridPromise((resolve, reject) => {
      if (Math.random() > 0.9) {
        reject('error')
      }

      setTimeout(() => {
        resolve('success')
      }, 100)
    })
    usage
      .then(res => console.log('resolved: HOOOOOOORAAAAAA', res))
      .catch(err => console.log('rejected:', err))
  }, [])
  return (
    <div className={styles.story}>
      <div className={styles.loadingContainer}>
        Loading
        <span className={styles.loadingIcon}>XXX</span>
      </div>
    </div>
  )
}
