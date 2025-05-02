import { useState } from 'react'
import { Button } from 'components/Button/Button'

import { CrudSample } from './extra/CrudSample'
import { MainApp } from './extra/MainApp/MainApp'
import styles from './Story.module.scss'

export const UseCrudStory = () => {
  const [showCrud, setShowCrud] = useState(false)
  return (
    <div className={styles.story}>
      <h4>B) useCrud</h4>
      <code>{'const {list} = useCrud()'}</code>
      <pre>
        - This hook will provide you api data
        <br />
        - Also handle exceptions automatically, also toast result message
        <br />
        - handling caching of api data
        <br />
        - And automatically will do the optimistic update for create, update, delete
        <br />- Also will manage the keys
      </pre>
      <h4></h4>
      <div>
        <Button label='toggle crud' onClick={() => setShowCrud(p => !p)} />
        <MainApp>{showCrud && <CrudSample />}</MainApp>
      </div>
    </div>
  )
}
