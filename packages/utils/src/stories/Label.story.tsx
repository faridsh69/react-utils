import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const LabelStory = () => {
  return (
    <div className={styles.story}>
      <h4>1 Label</h4>
      <code>{'<Label label="A long long label wrapped in a div with max 100px size" />'}</code>
      <h5>It will wrap the text and show tooltip if the label text space is not enough</h5>
      <div className={styles.story}>
        {Object.values(FontsEnum).map(font => (
          <Label
            label='A long long label wrapped in a div with max 100px size'
            color={ColorsEnum.BlueDark}
            font={font}
            key={font}
          />
        ))}
        <div style={{ width: 300 }}>
          <Label
            label='A long long label wrapped in a div with max 100px size'
            color={ColorsEnum.BlueDark}
            font={FontsEnum.Header18}
          />
        </div>
      </div>
    </div>
  )
}
