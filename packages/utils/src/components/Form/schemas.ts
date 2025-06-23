import * as yup from 'yup'

import { FormSchemaType } from './Form.types'

export const SCHEMAS = {
  wrapper: yup.object,
  requiredString: yup.string().required(),
  requiredNumber: yup.number().required(),
  mixed: (stringsArray: string[]) => yup.mixed().oneOf(stringsArray).required(),
  email: yup.string().email().required(),
}

export const TEST_SCHEMA: FormSchemaType = SCHEMAS.wrapper({
  first_name: SCHEMAS.requiredString.min(2),
  last_name: SCHEMAS.requiredString.min(2),
  gender: SCHEMAS.mixed(['male', 'female']),
  bio: SCHEMAS.requiredString,
  main_role: SCHEMAS.mixed(['admin', 'guest']),
})
