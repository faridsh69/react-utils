import { useCallback, useEffect, useRef } from 'react'

export const useClickOutside = (
  handleClose: () => void,
  isOpen: boolean,
  stillOpenOnClickPortals = true,
) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback(
    (event: any) => {
      const target = event.target
      if (!ref.current || ref.current.contains(target)) return
      if (stillOpenOnClickPortals && target?.closest('[data-floating-ui-portal]')) return // this is for select

      handleClose()
    },
    [handleClose],
  )

  useEffect(() => {
    if (!isOpen) return

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside, ref, isOpen])

  return ref
}
