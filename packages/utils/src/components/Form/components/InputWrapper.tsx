import { Label } from 'components/Label/Label'
import { getFormalCase } from 'helpers/helpers'

import { getCleanErrorMessage } from '../Form.helpers'
import { inputWrapperProps } from '../Form.types'
import styles from '../Form.module.scss'

export const InputWrapper = (props: inputWrapperProps) => {
  const { children, error, hideErrors = false } = props

  if (hideErrors) {
    return children
  }

  const errorMessage = getFormalCase(error?.message)
  const cleanedErrorMessage = getCleanErrorMessage(errorMessage)

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputComponent}>{children}</div>
      <div className={styles.errorWrapper}>
        <Label label={cleanedErrorMessage} hasError />
      </div>
    </div>
  )
}
