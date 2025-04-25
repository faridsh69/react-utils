import { InputControllerProps } from '../Form.types'

export const CustomComponentController = (props: InputControllerProps) => {
  const { FunctionComponent } = props

  if (!FunctionComponent) return null

  return <FunctionComponent {...props} />
}
