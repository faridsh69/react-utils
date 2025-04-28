import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Modal } from 'components/Modal/Modal'
import { IconsEnum, VariantsEnum } from 'enums/enums'

import { TableStory } from './Table.story'
import styles from './Story.module.scss'

export const ModalStory = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.story}>
      <h4>7 Modal </h4>
      <code>{`<Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title='Modal Title'
          body={
            <div>body</div>
          }
          actions=[{ label: 'Save', icon: OkIcon }]
        />`}</code>
      <h5>A form of modal</h5>
      <Button onClick={() => setIsOpen(true)} label='Open Modal' />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        bodyPadding={true}
        actions={[
          {
            label: 'Cancel',
            icon: IconsEnum.Cancel,
            onClick: () => setIsOpen(false),
          },
          {
            variant: VariantsEnum.Dark,
            label: 'Save',
            icon: IconsEnum.Ok,
            onClick: () => setIsOpen(false),
          },
        ]}
        title='Modal Title'
        body={
          <div style={{ height: 500 }}>
            <TableStory />
          </div>
        }
      />
    </div>
  )
}
