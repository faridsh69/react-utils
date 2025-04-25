import { useCallback, useEffect, useState } from 'react'
import { DEFAULT_VALIDATION_DELAY } from 'constants/constants'

export const useFormCallApiIfValid = (apiMethod: () => void, isFormsValid: boolean) => {
  const [isSendingApi, setIsSendingApi] = useState(false)

  const callApiIfValid = useCallback(() => {
    setTimeout(() => {
      setIsSendingApi(true)
    }, 2 * DEFAULT_VALIDATION_DELAY)

    setTimeout(() => {
      setIsSendingApi(false)
    }, 3 * DEFAULT_VALIDATION_DELAY)
  }, [])

  useEffect(() => {
    if (!isSendingApi) return
    if (!isFormsValid) return

    apiMethod?.()
  }, [isSendingApi])

  return callApiIfValid
}
