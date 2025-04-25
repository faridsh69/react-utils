import { CheckList } from 'components/CheckList/CheckList'

import styles from './Story.module.scss'

export const CheckListStory = () => {
  return (
    <div className={styles.story}>
      <h4>6 Checkbox - CheckList</h4>
      <CheckList
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'Two' },
        ]}
        value={[1, 2]}
        onChange={() => {}}
        label={'1 Label Label Label LabelLabel Label'}
        required={true}
        hasError={false}
        disabled={false}
        hint={'Checkbox Hint'}
        background={true}
        width={500}
      />
    </div>
  )
}
