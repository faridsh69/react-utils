import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (
  handleClose: () => void,
  isOpen: boolean,
  actionName = 'mouseup',
) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: any) => {
      const target = event.target
      if (!ref.current || ref.current.contains(target)) return
      if (target?.closest('[data-floating-ui-portal]')) return

      handleClose()
    },
    [handleClose],
  )

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener(actionName, handleClickOutside)

    return () => document.removeEventListener(actionName, handleClickOutside)
  }, [handleClickOutside, ref, isOpen])

  return ref
}
