import { autoUpdate, flip, offset, Placement, shift, size, useFloating } from '@floating-ui/react'

export const useFloatingUi = (propPlacement: Placement, padding: number) => {
  return useFloating({
    placement: propPlacement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(padding),
      flip(),
      shift({ padding }),
      size({
        apply({ elements, rects }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          })
        },
      }),
    ],
  })
}
