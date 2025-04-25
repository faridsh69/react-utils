import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const LabelStory = () => {
  return (
    <div className={styles.story}>
      <h4>1 Label, 2 Tooltip</h4>
      <code>{'<Label label="A long long label wrapped in a div with max 100px size" />'}</code>
      <h5>It will wrap the text and show tooltip if the label text space is not enough</h5>
      <div style={{ width: 100 }}>
        <Label
          font={FontsEnum.Header20}
          label='A long long label wrapped in a div with max 100px size'
          color={ColorsEnum.BlueDark}
        />
      </div>
    </div>
  )
}
