import { useState } from 'react'
import { Select } from 'components/Select/Select'
import { SelectTriggerComponents } from 'components/Select/Select.enums'
import { SelectOption } from 'components/Select/Select.types'
import { OptionValueType } from 'types/types'

import { SELECT_DEFAULT_PROPS } from './extra/storiesData'
import styles from './Story.module.scss'

export const SelectStory = () => {
  const [value, onChange] = useState<OptionValueType>(2)
  const [value2, onChange2] = useState<SelectOption[]>()
  const [isLoading, setIsLoading] = useState(false)

  const onSearch = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleScrollBottom = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.story}>
      <h4>6 Select with virtualization inside</h4>

      <h5>A Select component that can be single or multiple</h5>

      <div className={styles.selects}>
        <div className={styles.select}>
          Single:
          <br />
          <br />
          <Select
            {...SELECT_DEFAULT_PROPS}
            multiple={false}
            value={value}
            onChange={onChange}
            isLoading={isLoading}
            onScrollToBottom={handleScrollBottom}
            onSearch={onSearch}
          />
          <br />
          <br />
          <br />
          <Select
            {...SELECT_DEFAULT_PROPS}
            value={value}
            multiple={false}
            onChange={onChange}
            trigger={{
              component: SelectTriggerComponents.Button,
              props: { label: 'Button Label' },
            }}
          />
        </div>
        <div className={styles.select}>
          Multiple:
          <br />
          <br />
          <Select {...SELECT_DEFAULT_PROPS} multiple value={value2} onChange={onChange2} />
          <br />
          <br />
          <br />
          <Select
            {...SELECT_DEFAULT_PROPS}
            value={value2}
            onChange={onChange2}
            multiple
            trigger={{
              component: SelectTriggerComponents.Button,
              props: { label: 'Button Label' },
            }}
          />
        </div>
      </div>
    </div>
  )
}
