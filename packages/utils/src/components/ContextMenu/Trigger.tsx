import { Button } from 'components/Button/Button'

import { TriggerProps } from './ContextMenu.types'

export const Trigger = (props: TriggerProps) => {
  const { triggerNode, triggerButtonProps, isOpen, disabled } = props

  if (triggerNode) {
    return triggerNode
  }

  return <Button {...triggerButtonProps} active={isOpen} disabled={disabled} />
}
