import { DEFAULT_DEBOUNCE_TIME } from 'constants/constants'

export type TypeResolve = (...args: any[]) => void

export function debounceMethod(func: TypeResolve, debounceTime = DEFAULT_DEBOUNCE_TIME) {
  if (!func || !debounceTime) return func

  let timer: ReturnType<typeof setTimeout>

  return function (this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, debounceTime)
  }
}

export function debounceMethodWithPromise(func: TypeResolve, debounceTime = DEFAULT_DEBOUNCE_TIME) {
  let timer: ReturnType<typeof setTimeout>
  let lastResolvMethod: TypeResolve | null = null

  return (...args: string[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      const result = func(...args)
      // @ts-ignore
      lastResolvMethod(result)
      lastResolvMethod = null
    }, debounceTime)

    return new Promise(resolve => {
      lastResolvMethod = resolve
    })
  }
}

export function debounceMethodWithAllPromises(
  func: TypeResolve,
  debounceTime = DEFAULT_DEBOUNCE_TIME,
) {
  let timer: ReturnType<typeof setTimeout>
  let resolves: TypeResolve[] = []

  return (...args: string[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      const result = func(...args)
      resolves.forEach(r => r(result))
      resolves = []
    }, debounceTime)

    return new Promise(resolve => {
      resolves.push(resolve)
    })
  }
}
