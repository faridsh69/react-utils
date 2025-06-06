import { Button } from 'components/Button/Button'
import { ColorsEnum, SizesEnum, VariantsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ButtonStory = () => {
  return (
    <div className={styles.story}>
      <h4>18 Button</h4>
      <div className={styles.story}>
        {[ColorsEnum.Blue, ColorsEnum.Green, ColorsEnum.Red, ColorsEnum.Orange].map(color => (
          <div key={color} style={{ gap: 30, display: 'flex', flexDirection: 'column' }}>
            {Object.values(VariantsEnum).map(variant => (
              <div key={variant} style={{ gap: 30, display: 'flex' }}>
                {Object.values(SizesEnum).map(size => (
                  <Button
                    label='Label sample Gg Label sample Gg'
                    size={size}
                    key={size}
                    variant={variant}
                    color={color}
                    active={false}
                  />
                ))}
              </div>
            ))}
            <hr style={{ border: '1px solid #ccc', width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}
