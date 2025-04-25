import { ColorsEnum, FontsEnum, PlacementsEnum } from 'enums/enums'

export type LabelProps = {
  label?: string | number | null
  font?: FontsEnum
  disabled?: boolean
  linesCount?: number
  hasError?: boolean
  active?: boolean
  hint?: string
  zIndex?: number
  hintZIndex?: number
  mouseEnterDelay?: number
  forceTooltip?: boolean
  color?: ColorsEnum
  textAlignRight?: boolean
  required?: boolean
  tooltipPlacement?: PlacementsEnum
  className?: string
  htmlFor?: string
}
