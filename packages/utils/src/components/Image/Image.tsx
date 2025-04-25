import { useState } from 'react'
import { clsx } from 'clsx'
import { useElementVisiblity } from 'hooks/useElementVisiblity'
import Skeleton from 'react-loading-skeleton'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { ImageProps } from './Image.types'
import styles from './Image.module.scss'

export const Image = (props: ImageProps) => {
  const { src, alt = 'image', className, width, height } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(new Date().getTime())

  const { visiblityRef, isVisible } = useElementVisiblity()

  const handleLoadImage = () => {
    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < MINIMUM_TIME_FOR_SHOW_ANIMATION) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }

  return (
    <div className={clsx(styles.wrapper, className)} style={{ height, width }} ref={visiblityRef}>
      {imageState === IMAGE_STATES.loading && <Skeleton width={width} height={height} />}
      <img
        src={isVisible ? src : ''}
        onLoad={handleLoadImage}
        alt={alt}
        width={width}
        height={height}
        className={clsx(
          styles.image,
          imageState === IMAGE_STATES.loading && styles.loading,
          imageState === IMAGE_STATES.cached && styles.cached,
        )}
      />
    </div>
  )
}
