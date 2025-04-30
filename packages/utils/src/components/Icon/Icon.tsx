import {
  faArrowDown,
  faArrowRight,
  faArrowUp,
  faAsterisk,
  faCalendar,
  faCheck,
  faCopy,
  faDownload,
  faEdit,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  faEye,
  faEyeSlash,
  faFile,
  faInfoCircle,
  faMoneyBillAlt,
  faPhone,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconsEnum } from 'enums/enums'

import { IconProps } from './Icon.types'

const mapping = {
  [IconsEnum.Calendar]: faCalendar, // Calendar icon
  [IconsEnum.Edit]: faEdit, // Edit (pen) icon
  [IconsEnum.Phone]: faPhone, // Phone icon
  [IconsEnum.Ok]: faCheck, // Check (ok) icon
  [IconsEnum.Cancel]: faTimes, // Times (X, cancel) icon
  [IconsEnum.Trash]: faTrash, // Trash bin icon
  [IconsEnum.Mail]: faEnvelope, // Mail (envelope) icon
  [IconsEnum.View]: faEye, // Eye (view) icon
  [IconsEnum.Copy]: faCopy, // Copy icon (missing import, I'll show in a second)
  [IconsEnum.Money]: faMoneyBillAlt, // Money icon (missing import too)
  [IconsEnum.Invisible]: faEyeSlash, // Invisible (eye slash) icon
  [IconsEnum.Visible]: faEye, // Visible (eye) icon
  [IconsEnum.ArrowTop]: faArrowUp, // Arrow Up
  [IconsEnum.ArrowBottom]: faArrowDown, // Arrow Down
  [IconsEnum.ArrowRight]: faArrowRight, // Arrow Right
  [IconsEnum.NotFound]: faExclamationTriangle, // Not Found (warning triangle)
  [IconsEnum.Required]: faAsterisk, // Required field (asterisk) (missing import)
  [IconsEnum.Info]: faInfoCircle, // Info circle
  [IconsEnum.ThreeDots]: faEllipsisH, // Three dots horizontal
  [IconsEnum.File]: faFile, // File icon
  [IconsEnum.Download]: faDownload, // File icon
}

export const Icon = (props: IconProps) => {
  const { icon, className, style } = props

  if (!icon) return <></>

  const iconProp = mapping[icon]

  return <FontAwesomeIcon className={className} style={style} icon={iconProp} />
}
