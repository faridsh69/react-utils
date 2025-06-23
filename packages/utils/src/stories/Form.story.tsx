import { useState } from 'react'
import { Form } from 'components/Form/Form'
import { TEST_SCHEMA } from 'components/Form/schemas'
import { Modal } from 'components/Modal/Modal'

import { SMART_FORM_INPUTS } from './extra/storiesData'
import styles from './Story.module.scss'

export const FormStory = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    last_name: 'test',
    gender: 'female',
    chart_account_id: 1,
  })

  const onChangeInput = (formData: any) => {
    setFormValues(formData)
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
        schema={TEST_SCHEMA}
        onChangeInput={onChangeInput}
      />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title='Register User Form'
        body={<Form inputs={SMART_FORM_INPUTS} schema={TEST_SCHEMA} />}
      />
    </div>
  )
}
