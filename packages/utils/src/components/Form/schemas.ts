import * as yup from 'yup'

export const SCHEMAS = {
  wrapper: yup.object,
  requiredString: yup.string().required(),
  requiredNumber: yup.number().required(),
  mixed: (stringsArray: string[]) => yup.mixed().oneOf(stringsArray).required(),
  email: yup.string().email().required(),
}
