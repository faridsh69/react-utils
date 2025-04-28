import { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'

import styles from './Story.module.scss'

export const ToggleButtonStory = () => {
  return (
    <div className={styles.story}>
      <h4>13 Toggle Button </h4>
      <ToggleButtons
        options={[
          { value: 1, label: 'One' },
          { value: 2, label: 'twooooo' },
        ]}
      />
    </div>
  )
}
