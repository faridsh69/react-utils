import { useState } from 'react'
import { TabItems } from 'components/TabItems/TabItems'
import { DirectionsEnum, IconsEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

import styles from './Story.module.scss'

export const TabItemsStory = () => {
  const [value, setValue] = useState<OptionValueType>(1)

  return (
    <div className={styles.story}>
      <h4>14 Tab items </h4>
      <TabItems
        value={value}
        onChange={setValue}
        background={true}
        direction={DirectionsEnum.Horizontal}
        title='Human Resources'
        options={[
          {
            label: 'Section 1',
            icon: IconsEnum.Copy,
            value: 1,
          },
          {
            label: 'Section 1',
            value: 2,
            icon: IconsEnum.Ok,
          },
        ]}
      />
    </div>
  )
}
