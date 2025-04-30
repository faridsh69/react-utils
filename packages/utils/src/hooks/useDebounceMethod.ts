import { useCallback } from 'react'
import { DEFAULT_DEBOUNCE_TIME } from 'constants/constants'
import { debounceMethod } from 'helpers/debounce'

export const useDebounceMethod = (method: any, debounceTime = DEFAULT_DEBOUNCE_TIME) => {
  return useCallback(debounceMethod(method, debounceTime), [])
}
