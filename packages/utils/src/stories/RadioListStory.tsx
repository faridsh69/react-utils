import { RadioList } from 'components/RadioList/RadioList'

import styles from './Story.module.scss'

export const RadioListStory = () => {
  return (
    <div className={styles.story}>
      <h4>7 Radio, RadioList</h4>
      <RadioList
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
        ]}
        value={2}
        onChange={() => {}}
        // label={'Label'}
        required={true}
        hasError={false}
        disabled={false}
        background={true}
      />
    </div>
  )
}
