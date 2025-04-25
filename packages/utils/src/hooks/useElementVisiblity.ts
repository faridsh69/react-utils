import { useEffect, useRef, useState } from 'react'

export const useElementVisiblity = () => {
  const visiblityRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!visiblityRef.current) return

    const observer = new IntersectionObserver(([entry]) => {
      const isTotallyVisible = entry.intersectionRatio !== 0 || entry.intersectionRatio > 0.99
      setIsVisible(isTotallyVisible)
    })

    observer.observe(visiblityRef.current as HTMLDivElement)

    return () => observer.disconnect()
  }, [])

  return { visiblityRef, isVisible }
}
