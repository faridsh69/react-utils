import { MutableRefObject, useEffect, useRef, useState } from 'react'

type UseIsTextFitType = {
  isFit: boolean
  textRef: MutableRefObject<HTMLDivElement | null>
}

export const useIsTextFit = (): UseIsTextFitType => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isFit, setIsFit] = useState<boolean>(true)

  useEffect(() => {
    const textElement = textRef?.current
    if (!textElement) return

    setIsFit(textElement.scrollWidth <= textElement.offsetWidth)
  }, [textRef])

  return { isFit, textRef: textRef }
}
