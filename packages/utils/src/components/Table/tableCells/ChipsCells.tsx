import { Chip } from 'components/Chip/Chip'
import { ColorsEnum, SizesEnum } from 'enums/enums'

import { ChipsCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const ChipsCell = (props: ChipsCellProps) => {
  const { chips = [] } = props

  return (
    <div className={styles.tdCell}>
      {chips.map(chip => {
        const { size = SizesEnum.S, backgroundColor = ColorsEnum.BlueTransparent } = chip
        return (
          <Chip key={chip.label} label={chip.label} size={size} backgroundColor={backgroundColor} />
        )
      })}
    </div>
  )
}
