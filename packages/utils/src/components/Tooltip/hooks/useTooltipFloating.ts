import { useRef } from 'react'
import { arrow, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react'
import { PlacementsEnum } from 'enums/enums'

export const useTooltipFloating = (propPlacement = PlacementsEnum.Top) => {
  const arrowRef = useRef<HTMLDivElement>(null)
  const { refs, floatingStyles, placement, middlewareData } = useFloating({
    placement: propPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift({ padding: 10 }), arrow({ element: arrowRef })],
  })

  const { x: arrowX, y: arrowY } = middlewareData.arrow || {}
  const mainPartOfPlacement = placement.split('-')[0]
  const arrowPlacement = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[mainPartOfPlacement] as string
  const arrowBorderPlacement = {
    top: 'left',
    right: 'top',
    bottom: 'right',
    left: 'bottom',
  }[mainPartOfPlacement] as string

  const capitalize = (val: string) => val.charAt(0).toUpperCase() + val.slice(1)

  const arrowStyles = {
    [`border${capitalize(mainPartOfPlacement)}Color`]: 'transparent',
    [`border${capitalize(arrowBorderPlacement)}Color`]: 'transparent',
    left: arrowX != null ? `${arrowX}px` : '',
    top: arrowY != null ? `${arrowY}px` : '',
    [arrowPlacement]: '-5px',
  }

  return {
    refs,
    floatingStyles,
    arrowRef,
    arrowStyles,
  }
}
