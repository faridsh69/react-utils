import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { FontsEnum, IconsEnum } from 'enums/enums'
import { renderPriceFormat } from 'helpers/calculationHelpers'

import { PriceCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const PriceCell = (props: PriceCellProps) => {
  const {
    label = 0,
    subLabel = '€',
    bold = false,
    icon = IconsEnum.Money,
    font: propsFont,
    color,
    textAlignRight = true,
  } = props

  const font = propsFont ? propsFont : bold ? FontsEnum.Header12 : FontsEnum.Text12

  return (
    <div className={clsx(styles.priceCell, textAlignRight && styles.textAlignRight)}>
      <Icon icon={icon} className={styles.cellIcon} />
      <Label label={renderPriceFormat(label)} font={font} color={color} />
      <Label label={subLabel} disabled color={color} />
    </div>
  )
}
