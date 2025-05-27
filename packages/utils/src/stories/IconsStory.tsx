import { Icon } from 'components/Icon/Icon'
import { IconsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const IconsStory = () => {
  return (
    <div className={styles.story}>
      <h4>17 Icons</h4>
      <div style={{ gap: 20, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {Object.values(IconsEnum).map(icon => (
          <div key={icon} style={{ gap: 0, display: 'flex', flexDirection: 'column' }}>
            <Icon icon={icon} style={{ color: '#333' }} />
            <br />
            <br />
            {icon}
          </div>
        ))}
      </div>
    </div>
  )
}
