import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { Loader } from 'components/Loader/Loader'
import { FontsEnum } from 'enums/enums'
import { useTrans } from 'hooks/useTrans'

import { DataNotFoundProps } from './DataNotFound.types'
import styles from './DataNotFound.module.scss'

export const DataNotFound = (props: DataNotFoundProps) => {
  const { isLoading, label: propsLabel, icon, image, className } = props

  const { t } = useTrans()

  const finalLabel = propsLabel || t('No results found!')
  const label = isLoading ? t('Searching...') : finalLabel

  return (
    <div className={clsx(styles.wrapper, className)}>
      {isLoading && <Loader label='' subLabel='' />}
      {!isLoading && !image && <Icon icon={icon} className={styles.icon} />}
      {!isLoading && image && <Image src={image} />}
      <Label label={label} font={FontsEnum.Text14} disabled />
    </div>
  )
}
