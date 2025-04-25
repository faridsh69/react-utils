import { useState } from 'react'
import { Button } from 'components/Button/Button'

import { CrudSample } from './extra/CrudSample'
import { MainApp } from './extra/MainApp/MainApp'
import styles from './Story.module.scss'

export const UseCrudStory = () => {
  const [showCrud, setShowCrud] = useState(false)
  return (
    <div className={styles.story}>
      <h4>useCrud </h4>
      <code>{'const {list} = useCrud()'}</code>
      <h5>
        This hook will provide you api data, includ handle exception and toast result message with
        handling caching of api data, also handling op mistic update
      </h5>
      <div>
        <Button label='toggle crud' onClick={() => setShowCrud(p => !p)} />
        <MainApp>{showCrud && <CrudSample />}</MainApp>
      </div>
    </div>
  )
}
