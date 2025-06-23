import { getFormalCase } from 'helpers/helpers'

import { getCleanErrorMessage } from './Form.helpers'
import { inputWrapperProps } from './Form.types'
import styles from './Form.module.scss'

export const ErrorWrapper = (props: inputWrapperProps) => {
  const { children, error } = props

  const errorMessage = getFormalCase(error?.message)
  const cleanedErrorMessage = getCleanErrorMessage(errorMessage)

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputComponent}>{children}</div>
      <div className={styles.errorWrapper}>
        <span className={error ? styles.hasError : ''}>{cleanedErrorMessage}</span>
      </div>
    </div>
  )
}
