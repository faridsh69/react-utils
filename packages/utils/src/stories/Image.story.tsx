import { Image } from 'components/Image/Image'
import { ImageProps } from 'components/Image/Image.types'
import { IMAGE_URLS } from 'constants/constants'

import styles from './Story.module.scss'

const bigSizeImage =
  'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominikagregus-672532.jpg&fm=jpg'

export const ImageStory = () => {
  const propsArray: ImageProps[] = []

  for (const src of [bigSizeImage, IMAGE_URLS.trash, IMAGE_URLS.ok]) {
    propsArray.push({
      src,
      height: 300,
    })
  }

  return (
    <div className={styles.story}>
      <h4>9 Image </h4>
      <code> {'<Image src={IMAGE_URLS.trash} />'}</code>
      <h5>Load image with default loading skeleton before image is loading</h5>
      <div className={styles.Image}>
        {propsArray.map((props, index) => {
          return (
            <div key={index}>
              <Image alt='big size image' {...props} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
