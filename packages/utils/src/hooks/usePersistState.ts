import { useEffect, useState } from 'react'
import { APP_LS_KEY } from 'constants/constants'
import { getLs, setLs } from 'helpers/localstorage'

export const usePersistState = <T>(
  lsKey: string,
  defaultValue: T,
  appLsKey = APP_LS_KEY,
): [T, (value: T) => void] => {
  const initialState = getLs(lsKey, defaultValue, appLsKey)
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    setLs(lsKey, value, appLsKey)
  }, [value])

  return [value, setValue]
}
