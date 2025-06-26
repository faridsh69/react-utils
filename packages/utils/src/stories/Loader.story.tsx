import { useEffect } from 'react'
import { Loader } from 'components/Loader/Loader'
import { SizesEnum } from 'enums/enums'

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
      <h4>10 Loader </h4>
      <code>{'<Loader title="Loading users..." description="Please wait" />'}</code>
      <h5>A loader comblined with title text</h5>
      <div className={styles.story}>
        {Object.values(SizesEnum).map(size => (
          <Loader size={size} key={size} />
        ))}
      </div>
    </div>
  )
}
