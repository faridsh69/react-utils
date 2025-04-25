import { useEffect, useState } from 'react'
import { DEFAULT_DEBOUNCE_TIME } from 'constants/constants'

export const useDebounceValue = (value: any, debounceTime = DEFAULT_DEBOUNCE_TIME) => {
  const [result, setResult] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setResult(value)
    }, debounceTime)

    return () => clearTimeout(timeout)
  }, [value, debounceTime])

  return result
}
