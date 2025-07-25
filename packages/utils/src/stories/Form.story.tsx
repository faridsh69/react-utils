import { useState } from 'react'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { CheckList } from 'components/CheckList/CheckList'
import { Form } from 'components/Form/Form'
import { InputComponentsEnum } from 'components/Form/Form.enums'
import { FormInput, FormSchemaType, InputControllerProps } from 'components/Form/Form.types'
import { SCHEMAS } from 'components/Form/schemas'
import { RadioList } from 'components/RadioList/RadioList'
import { Select } from 'components/Select/Select'
import { Textarea } from 'components/Textarea/Textarea'
import { TextInput } from 'components/TextInput/TextInput'
import { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'

export const uikitMapper = {
  TextInput,
  Textarea,
  Select: Select as any,
  Checkbox,
  ToggleButtons,
  RadioList,
  CheckList,
}

export const FormStory = () => {
  const [formData, setFormData] = useState({
    first_name: 'Jon',
    last_name: 'Adel',
    gender: 'male',
    salary: 123000,
    job: 'IT',
    role: 'Admin',
    accept_term_and_conditions: ['accept'],
    bio: 'This is my own bio',
    family: [
      {
        first_name: 'papa',
        last_name: 'Adel',
        gender: 'male',
      },
      {
        first_name: 'mama',
        last_name: 'Adel',
        gender: 'female',
        phones: [{ phone: '12345678901' }, { phone: '12345678902' }],
      },
    ],
    educations: [{ education: 'bachelors' }, { education: 'diplome' }],
    // group_1: [
    //   {
    //     name_1: '1',
    //     group_2: [
    //       {
    //         static_input_g2: '3',
    //         group_2: [
    //           {
    //             name_2: '4',
    //           },
    //           {
    //             name_2: '5',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     name_1: '2',
    //     group_2: [
    //       {
    //         static_input_g2: '7',
    //         group_2: [
    //           {
    //             name_2: '8',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
  })

  const TEST_SCHEMA: FormSchemaType = SCHEMAS.wrapper({
    first_name: SCHEMAS.requiredString.min(5),
    last_name: SCHEMAS.requiredString.min(2),
    gender: SCHEMAS.mixed(['male', 'female']),
    bio: SCHEMAS.requiredString,
    role: SCHEMAS.mixed(['admin', 'guest']),
  })

  const onChangeInput = (formData: any) => {
    setFormData(formData)
  }

  const hiddenInputLabelsBasedOnIndex = (fieldIndex: number) => {
    // We are checking based on field index to determine which inputs should be hidden
    const education = formData?.educations?.[fieldIndex]?.education

    if (education === 'bachelors') {
      return ['schools'] // List of hidden inputs
    }

    if (education === 'diplome') {
      return ['universities']
    }

    return ['universities', 'schools']
  }

  // const [path] = useAtom(usePathAtom)
  // const [fieldIndexes] = useAtom(useFieldIndexesAtom)

  // const hiddenGroup3 = (fieldIndex: number) => {
  //   const indexes = Object.values(fieldIndexes)
  //   const con =
  //     formData.group_1?.[indexes[0]]?.group_2?.[indexes[1]]?.group_3?.[fieldIndex]?.name_3 == '1'

  //   if (con) {
  //     return ['Farid']
  //   }

  //   return []
  // }

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
      name: 'birth_date',
      columns: 4,
      component: InputComponentsEnum.Date,
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
      name: 'role',
      columns: 4,
      component: InputComponentsEnum.Select,
      options: [
        {
          value: 'admin',
          label: 'Admin',
        },
        {
          value: 'guest',
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
          name: 'first_name',
          label: 'First name',
          columns: 4,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'last_name',
          label: 'Last name',
          columns: 4,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'phones',
          label: 'Add new phone',
          noItemsLabel: 'No phone added yet',
          columns: 4,
          component: InputComponentsEnum.Group,
          inputs: [
            {
              name: 'phone',
              label: 'Phone number',
              columns: 12,
              component: InputComponentsEnum.Text,
            },
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
    {
      name: 'educations',
      label: 'add custom group exceptions',
      component: InputComponentsEnum.Group,
      hiddenInputLabelsBasedOnIndex,
      inputs: [
        {
          name: 'education',
          label: 'education',
          columns: 6,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'schools',
          label: 'schools',
          placeholder: 'schools',
          columns: 6,
          component: InputComponentsEnum.Text,
        },
        {
          name: 'universities',
          label: 'universities',
          placeholder: 'universities',
          columns: 6,
          component: InputComponentsEnum.Text,
        },
      ],
    },

    {
      name: 'group_1',
      fieldName: 'group_1',
      label: 'Add new group 1',
      noItemsLabel: 'No group 1 added.',
      checkPathInBreadcrumb: true,
      arrowButtonPath: '/g1/g2',
      breadCrumbOptions: [
        {
          label: 'Group 1',
          path: '/g1',
        },
      ],
      component: InputComponentsEnum.GroupPath,
      inputs: [
        {
          name: 'name_1',
          label: 'Name 1',
          component: InputComponentsEnum.Text,
        },
        {
          name: 'group_2',
          fieldName: 'group_2',
          label: 'Add new group 2',
          noItemsLabel: 'No group 2 added.',
          checkPathInBreadcrumb: true,
          arrowButtonPath: '/g1/g2/g3',
          breadCrumbOptions: [
            {
              label: 'Group 1',
              path: '/g1',
            },
            {
              label: 'Group 2',
              path: '/g1/g2',
            },
          ],
          component: InputComponentsEnum.GroupPath,
          inputs: [
            {
              name: 'name_2',
              label: 'Name 2',
              component: InputComponentsEnum.Text,
            },

            {
              name: 'group_3',
              fieldName: 'group_3',
              label: 'Add new group 3',
              noItemsLabel: 'No group 3 added.',
              checkPathInBreadcrumb: true,
              // arrowButtonPath: '/g1/g2/g3/g4',
              breadCrumbOptions: [
                {
                  label: 'Group 1',
                  path: '/g1',
                },
                {
                  label: 'Group 2',
                  path: '/g1/g2',
                },
                {
                  label: 'Group 3',
                  path: '/g1/g2/g3',
                },
              ],
              component: InputComponentsEnum.GroupPath,
              // hiddenInputLabelsBasedOnIndex: hiddenGroup3,
              inputs: [
                {
                  name: 'name_3',
                  label: 'Name 3',
                  component: InputComponentsEnum.Text,
                },
                {
                  name: 'name_3_conditional',
                  label: 'Farid',
                  component: InputComponentsEnum.Text,
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  // console.log('formData', formData)
  // groupExeption

  return (
    <div>
      <h4>Form {`<Form inputs={[{name: 'email'}]} />`}</h4>
      <pre>
        inputs: Form is a component that will build a form based on array of inputs in props.
        <br />
        schema: Form accepts an schema and do live validation based on that schema with statistics.
        <br />
        columns: For each input you can set width of the input based on 12 column grid.
        <br />
        onCahngeInput: You have access to current form data and current changed input via this
        callback.
        <br />
        uikitMapper: You can override the default uikit components.
        <br />
        Grouping fields: You can manage unlimit group in group inputs with not even 1 line of code.
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
