import { calculateObjectPropertySum } from 'helpers/calculationHelpers'
import * as yup from 'yup'

import { FormSchemaType } from './Form.types'

const REGEXS = {
  alphabeticAndNumbers: /^[^!@#$%^&*+=<>:;|~]*$/,
  phone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]{4,16}$/g,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,30}$/,
}

export const SCHEMAS = {
  requiredString: yup.string().required(),
  requiredNumber: yup.number().required(),
  mixed: (stringsArray: string[]) => yup.mixed().oneOf(stringsArray).required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(REGEXS.phone, 'Phone is not valid'),

  // username: yup
  //   .string()
  //   .required()
  //   .min(3, 'Username must have atleast 3 characters.')
  //   .matches(REGEXS.alphabeticAndNumbers, {
  //     message: 'Only alphabetic and number allowed.',
  //   }),
  // password: yup
  //   .string()
  //   .required()
  //   .matches(
  //     REGEXS.password,
  //     `Password must contain Minimum 4 and maximum 40 characters,
  //   at least one uppercase letter,
  //   one lowercase letter
  //   and one number`,
  //   ),
}

const USERS_ROLE_ENUM = ['Admin']
const USERS_GENDER_ENUM = ['male']

export const TEST_SCHEMA: FormSchemaType = yup.object({
  // first_name: SCHEMAS.requiredString.min(2, 'Name must have atleast 2 characters.'),
  last_name: SCHEMAS.requiredString.min(2, 'Last name must have atleast 2 characters.'),
  gender: SCHEMAS.mixed(USERS_GENDER_ENUM),
  bio: SCHEMAS.requiredString,
  main_role: SCHEMAS.mixed(USERS_ROLE_ENUM),
  birth_date: SCHEMAS.requiredString,
  roles: yup
    .array()
    .of(
      yup.object({
        value: yup.string(),
      }),
    )
    .min(2)
    .required(),
  // accept_term_and_conditions: yup
  //   .boolean()
  //   .oneOf([true], 'Accept term and conditions is a required field')
  //   .required(),
})

export const ARRAY_SCHEMA = yup.object({
  validation: SCHEMAS.requiredString,
  arrayOfInputs: yup
    .array()
    .of(
      yup.object().shape({
        payment_percentage: SCHEMAS.requiredNumber,
        due_date: SCHEMAS.requiredString,
        amount: SCHEMAS.requiredString,
      }),
    )
    .required()
    .test('sum-100', 'The total percentage must be 100%', installments => {
      if (!installments || installments.length === 0) return false

      const total = calculateObjectPropertySum(installments, 'payment_percentage')

      return total === 100
    }),
})
