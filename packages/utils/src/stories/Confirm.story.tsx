import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Confirm } from 'components/Confirm/Confirm'
import { ColorsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ConfirmStory = () => {
  const [confirmColor, setConfirmColor] = useState(ColorsEnum.Red)
  const [isOpen, setIsOpen] = useState(false)

  const showConfirm = (color: ColorsEnum) => {
    setConfirmColor(color)
    setIsOpen(true)
  }

  return (
    <div className={styles.story}>
      <h4>12 Confirm </h4>
      <code>{`<Confirm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          variant={confirmVariant}
          onConfirm={() => alert('confirmed')}
          onCancel={() => alert('canceled')}
        />`}</code>
      <h5>It will show a confirmation modal with 3 colors, blue, green, red</h5>
      <div style={{ display: 'flex', gap: 10 }}>
        <Button
          color={ColorsEnum.Red}
          label='Confirm Delete?'
          onClick={() => showConfirm(ColorsEnum.Red)}
        />
        <Button
          color={ColorsEnum.Blue}
          label='Confirm Edit?'
          onClick={() => showConfirm(ColorsEnum.Blue)}
        />
        <Button
          color={ColorsEnum.Green}
          label='Confirm Save?'
          onClick={() => showConfirm(ColorsEnum.Green)}
        />
        <Button
          color={ColorsEnum.Orange}
          label='Confirm Save?'
          onClick={() => showConfirm(ColorsEnum.Orange)}
        />
        <Confirm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          color={confirmColor}
          // eslint-disable-next-line no-console
          onConfirm={() => console.warn('confirmed')}
          // eslint-disable-next-line no-console
          onCancel={() => console.warn('canceled')}
        />
      </div>
    </div>
  )
}
