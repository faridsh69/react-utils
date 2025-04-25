import { useCallback } from 'react'

import { QUERY_CLIENT } from '../apis/queryConstants'

export const useInvalidateQueryKey = (queryKey: string) => {
  const invalidate = useCallback(() => {
    QUERY_CLIENT.invalidateQueries({
      queryKey: [queryKey],
    })
  }, [queryKey])

  return invalidate
}
