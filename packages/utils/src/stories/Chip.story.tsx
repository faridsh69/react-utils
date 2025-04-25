import { Chip } from 'components/Chip/Chip'

import styles from './Story.module.scss'

export const ChipStory = () => {
  return (
    <div className={styles.story}>
      <h4>16 Chip </h4>
      <Chip label='Label sample Gg Label sample Gg' bold={false} width='100px' />
    </div>
  )
}
