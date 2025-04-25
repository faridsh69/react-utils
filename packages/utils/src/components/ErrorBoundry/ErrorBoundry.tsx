import { handleException } from 'helpers/handleException'
import { ErrorBoundary } from 'react-error-boundary'

import { Fallback } from './components/Fallback'
import { ErrorBoundryProps } from './ErrorBoundry.types'

export const ErrorBoundry = (props: ErrorBoundryProps) => {
  const { children, onReset } = props

  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={(error: Error) => handleException(error)}
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  )
}
