import { useEffect } from 'react'

export const useEventListener = (eventName: string, action: any, dependencies: any[] = []) => {
  useEffect(() => {
    document.addEventListener(eventName, action)

    return () => document.removeEventListener(eventName, action)
  }, dependencies)
}
