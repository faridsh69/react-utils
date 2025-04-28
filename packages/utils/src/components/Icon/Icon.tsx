import { faCheck, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsEnum } from 'enums/enums'

import { IconProps } from './Icon.types'

export const Icon = (props: IconProps) => {
  const { icon, className, style } = props

  if (icon === IconsEnum.Cancel) {
    return <FontAwesomeIcon className={className} style={style} icon={faXmark} />
  }

  if (icon === IconsEnum.Ok) {
    return <FontAwesomeIcon className={className} style={style} icon={faCheck} />
  }

  if (icon === IconsEnum.Mail) {
    return <span className={className}>✉</span>
  }

  if (icon === IconsEnum.View) {
    return <FontAwesomeIcon icon={faMagnifyingGlass} />
  }

  return <span></span>
}
