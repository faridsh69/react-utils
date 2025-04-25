import { useCallback, useState } from 'react'

type TypeUseToggle = (defaultValue: boolean) => {
  isOpen: boolean
  handleToggle: () => void
  handleOpen: () => void
  handleClose: () => void
}

export const useToggle: TypeUseToggle = (defaultValue: boolean) => {
  const [isOpen, setOpen] = useState(defaultValue)

  const handleToggle = useCallback(() => {
    setOpen(prev => !prev)
  }, [])

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return { isOpen, handleToggle, handleOpen, handleClose }
}
