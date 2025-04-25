import { useEffect, useState } from 'react'

export const useRunOnlyOnChange = (value: any, method: any) => {
  const [prevValue, setPrevValue] = useState<any>(value)

  useEffect(() => {
    setPrevValue(value)

    if (prevValue === value) return

    method?.()
  }, [value])
}
