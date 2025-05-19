import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (handleClose: () => void, isOpen: boolean) => {
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

    document.addEventListener('mouseup', handleClickOutside)

    return () => document.removeEventListener('mouseup', handleClickOutside)
  }, [handleClickOutside, ref, isOpen])

  return ref
}
