import { ReactNode } from 'react'

export type ErrorBoundryProps = {
  children: ReactNode
  onReset: () => void
}

export type FallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}
