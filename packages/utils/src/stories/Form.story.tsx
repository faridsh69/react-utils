import { useState } from 'react'
import { Form } from 'components/Form/Form'
import { TEST_SCHEMA } from 'components/Form/schemas'
import { Modal } from 'components/Modal/Modal'
import { IconsEnum } from 'enums/enums'

import { SMART_FORM_INPUTS } from './extra/storiesData'
import styles from './Story.module.scss'

export const FormStory = () => {
  const FORM_ID = 'FORM_ID'

  const [isOpen, setIsOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    last_name: 'Shah',
    gender: 'female',
    chart_account_id: 1,
  })

  const onChangeInput = (inputNewValue: object) => {
    setFormValues(p => ({ ...p, ...inputNewValue }))
  }
  return (
    <div className={styles.story}>
      <h4>A) Form Generator {`<Form inputs={[{name: 'email'}]} />`}</h4>
      <pre>
        - This is a component that is automatically generate all kind of fields
        <br />
        - Also we can have all type of validations for each inputs
        <br />- Also it will give you the current data of inputs and validity of form
      </pre>
      <Form
        inputs={SMART_FORM_INPUTS}
        values={formValues}
        onChangeInput={onChangeInput}
        schema={TEST_SCHEMA}
        label='Register User Form'
        icon={IconsEnum.Ok}
        hiddenSubmitButtonId={FORM_ID}
        background={true}
        collapsable={true}
      />
      {/* <br /> */}
      {/* <Button label='save' onClick={() => submitFormId(FORM_ID)} /> */}
      {/* <br /> */}
      {/* <Button
        variant={VariantsEnum.Dark}
        label='show form in a modal'
        onClick={() => setIsOpen(true)}
      /> */}
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
