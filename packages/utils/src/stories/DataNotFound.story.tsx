import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { IMAGE_URLS } from 'constants/constants'

import styles from './Story.module.scss'

export const DataNotFoundStory = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.story}>
      <h4>11 DataNotFound </h4>

      <code>
        {`<DataNotFound image icon label
        />`}
      </code>
      <h5>It will show after search data is not found</h5>
      <Button label='start searching' onClick={handleSearch} />
      <div style={{ width: 160 }}>
        <DataNotFound isLoading={isLoading} label='Companies not found.' image={IMAGE_URLS.trash} />
      </div>
    </div>
  )
}
