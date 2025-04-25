import { useCallback } from 'react'
import { debounceMethod } from 'helpers/debounce'

export const useDebounceMethod = (method: any, debounceTime = 0) => {
  return useCallback(debounceMethod(method, debounceTime), [])
}
