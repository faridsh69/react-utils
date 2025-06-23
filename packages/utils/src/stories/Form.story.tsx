import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { CheckList } from 'components/CheckList/CheckList'
import { Form } from 'components/Form/Form'
import { InputComponentsEnum } from 'components/Form/Form.enums'
import { FormInput, InputControllerProps } from 'components/Form/Form.types'
import { TEST_SCHEMA } from 'components/Form/schemas'
import { Label } from 'components/Label/Label'
import { RadioList } from 'components/RadioList/RadioList'
import { Select } from 'components/Select/Select'
import { Textarea } from 'components/Textarea/Textarea'
import { TextInput } from 'components/TextInput/TextInput'
import { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'

import styles from './Story.module.scss'

export const uikitMapper = {
  Label,
  Button,
  TextInput,
  Checkbox,
  CheckList,
  ToggleButtons,
  Textarea,
  RadioList,
  Select: Select as any,
  DatePicker: () => <div>DatePicker</div>,
}

export const FormStory = () => {
  const [formData, setFormData] = useState({
    first_name: 'First name',
    last_name: 'Last name',
    gender: 'male',
  })

  const onChangeInput = (formData: any) => {
    setFormData(formData)
  }

  const inputs: FormInput[] = [
    {
      name: 'first_name',
      columns: 6,
      component: InputComponentsEnum.Text,
    },
    {
      name: 'last_name',
      label: 'Last name (with custom label, placeholder, required, debounce time)',
      columns: 6,
      component: InputComponentsEnum.Text,
      placeholder: 'Last name (with placeholder, required, debounce time)',
      required: true,
    },
    {
      name: 'salary',
      label: 'Salary (With mask for price or float or integer)',
      columns: 4,
      component: InputComponentsEnum.Text,
    },
    {
      name: 'gender',
      columns: 4,
      component: InputComponentsEnum.RadioList,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },

    {
      name: 'Job',
      columns: 4,
      component: InputComponentsEnum.ToggleButton,
      options: [
        { value: 'IT', label: 'IT' },
        { value: 'Other', label: 'Other' },
      ],
    },

    {
      name: 'role',
      columns: 4,
      component: InputComponentsEnum.Select,
      options: [
        {
          value: 'Admin',
          label: 'Admin',
        },
        {
          value: 2,
          label: 'Guest',
        },
        {
          value: 3,
          label: 'User',
        },
      ],
    },

    {
      name: 'accept_term_and_conditions',
      columns: 4,
      component: InputComponentsEnum.Checklist,
      options: [
        {
          value: 'accept',
          label: 'Do you agree our terms?',
        },
        {
          value: 'email',
          label: 'Recieve email?',
        },
      ],
    },
    {
      name: 'has_disablity?',
      columns: 4,
      component: InputComponentsEnum.Checkbox,
    },
    {
      name: 'bio',
      columns: 12,
      component: InputComponentsEnum.Textarea,
    },
    {
      name: 'family',
      label: 'Add new family members',
      noItemsLabel: 'No family member added yet',
      columns: 12,
      component: InputComponentsEnum.Group,
      inputs: [
        {
          name: 'first name',
          label: 'First name',
          columns: 4,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'last name',
          label: 'Last name',
          columns: 4,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'gender',
          label: 'Gender',
          columns: 4,
          component: InputComponentsEnum.RadioList,
          options: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ],
        },
      ],
    },
    {
      name: 'custom name',
      columns: 12,
      component: InputComponentsEnum.Custom,
      ControllerComponent: (props: InputControllerProps) => (
        <small>name: {props.name}, others</small>
      ),
    },
  ]

  return (
    <div className={styles.story}>
      <h4>A) Form {`<Form inputs={[{name: 'email'}]} />`}</h4>
      <pre>
        inputs: - This is a component that will build a form based on array of inputs in props
        <br />
        schema: - This for accept an schema and do live validation based on that schema
        <br />
        columns: - For each input you can set a number between 0-12 for defining column width
        <br />
        onCahngeInput: - This will despose current form data and current changed input via
        onCahngeInput
      </pre>
      <Form
        inputs={inputs}
        schema={TEST_SCHEMA}
        values={formData}
        onChangeInput={onChangeInput}
        uikitMapper={uikitMapper}
      />
    </div>
  )
}
