import { RadioList } from 'components/RadioList/RadioList'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const RadioListStory = () => {
  return (
    <div className={styles.story}>
      <h4>4 Radio, RadioList</h4>
      <div className={styles.story}>
        {Object.values(SizesEnum).map(size => (
          <RadioList
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
            ]}
            value={2}
            onChange={() => {}}
            required={true}
            hasError={false}
            disabled={false}
            background={true}
            size={size}
            key={size}
            label={'RadioList: ' + size}
          />
        ))}
      </div>
    </div>
  )
}
