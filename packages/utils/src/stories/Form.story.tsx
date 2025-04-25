import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Form } from 'components/Form/Form'
import { TEST_SCHEMA } from 'components/Form/schemas'
import { Modal } from 'components/Modal/Modal'
import { VariantsEnum } from 'enums/enums'
import { submitFormId } from 'helpers/formHelpers'

import { SMART_FORM_INPUTS } from './extra/storiesData'
import styles from './Story.module.scss'

export const FormStory = () => {
  const FORM_ID = 'FORM_ID'

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.story}>
      <h4>21 Form</h4>
      <Form
        label='Register User Form'
        subLabel='No item added yet'
        inputs={SMART_FORM_INPUTS}
        schema={TEST_SCHEMA}
        values={{ last_name: 'Shah', gender: 'female', chart_account_id: 1 }}
        onSubmit={(data: any) => console.warn(data)}
        hiddenSubmitButtonId={FORM_ID}
        background={true}
        collapsable={true}
        isCollapsed={false}
        noPadding={false}
        width={1000}
      />
      <br />
      <Button label='save' onClick={() => submitFormId(FORM_ID)} />
      <br />
      <Button
        variant={VariantsEnum.Dark}
        label='show form in a modal'
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title='Register User Form'
        body={
          <Form width={1400} inputs={SMART_FORM_INPUTS} schema={TEST_SCHEMA} background={false} />
        }
      />
    </div>
  )
}
