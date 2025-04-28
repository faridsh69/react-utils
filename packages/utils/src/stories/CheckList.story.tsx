import { CheckList } from 'components/CheckList/CheckList'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const CheckListStory = () => {
  return (
    <div className={styles.story}>
      <h4>3 Checkbox, CheckList</h4>
      <div className={styles.story}>
        {Object.values(SizesEnum).map(size => (
          <CheckList
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
            ]}
            value={[1, 2]}
            onChange={() => {}}
            label={'CheckList: ' + size}
            required={true}
            hasError={false}
            disabled={false}
            hint={'Checkbox Hint'}
            background={true}
            size={size}
            key={size}
          />
        ))}
      </div>
    </div>
  )
}
