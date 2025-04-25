import { ReactNode, StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'

import { isDev } from './helpers'

export const bootstrap = (App: ReactNode) => {
  if (!isDev()) return

  function mountAppClosure() {
    let root: Root | null = null

    return (elem: Element) => {
      root = root ?? createRoot(elem)

      root.render(<StrictMode>{App}</StrictMode>)

      return () =>
        queueMicrotask(() => {
          root?.unmount()
          root = null
        })
    }
  }

  const mountApp = mountAppClosure()
}
