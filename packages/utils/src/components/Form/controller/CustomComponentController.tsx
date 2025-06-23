import { InputControllerProps } from '../Form.types'

export const CustomController = (props: InputControllerProps) => {
  const { ControllerComponent } = props

  if (!ControllerComponent) return null

  return <ControllerComponent {...props} />
}
