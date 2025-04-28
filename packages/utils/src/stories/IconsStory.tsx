import { Icon } from 'components/Icon/Icon'
import { IconsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const IconsStory = () => {
  return (
    <div className={styles.story}>
      <h4>17 Icons</h4>
      <div className={styles.story}>
        {Object.values(IconsEnum).map(icon => (
          <Icon icon={icon} />
        ))}
      </div>
    </div>
  )
}
