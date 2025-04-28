import { Chip } from 'components/Chip/Chip'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ChipStory = () => {
  return (
    <div className={styles.story}>
      <h4>12 Chip</h4>
      <div className={styles.story}>
        {Object.values(SizesEnum).map(size => (
          <Chip label='Label sample Gg Label sample Gg' bold={false} width='100px' size={size} />
        ))}
      </div>
    </div>
  )
}
