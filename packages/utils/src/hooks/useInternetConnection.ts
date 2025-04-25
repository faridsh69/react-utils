import { useEffect, useState } from 'react'

import { useEventListener } from './useEventListener'

export const useInternetConnection = () => {
  const [internetConnectionStatus, setInternetConnectionStatus] = useState(true)

  useEffect(() => {
    if (!internetConnectionStatus) {
      alert('You are offline!')
    }
  }, [internetConnectionStatus])

  useEventListener('offline', () => setInternetConnectionStatus(false))
  useEventListener('online', () => setInternetConnectionStatus(true))

  return internetConnectionStatus
}
