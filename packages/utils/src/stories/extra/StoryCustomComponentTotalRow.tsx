import { InputControllerProps } from 'components/Form/Form.types'
import { Label } from 'components/Label/Label'
import { PriceCell } from 'components/Table/tableCells/PriceCell'
import { TotalRow } from 'components/TotalRow/TotalRow'
import { ColorsEnum, FontsEnum } from 'enums/enums'
import { Controller } from 'react-hook-form'

import styles from '../Story.module.scss'

export const StoryCustomComponentTotalRow = (props: InputControllerProps) => {
  const { name, control } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => {
        return (
          <TotalRow active>
            <div className={styles.row}>
              <div className={styles.col9}>
                <Label
                  label={'Total'}
                  color={ColorsEnum.Blue}
                  font={FontsEnum.Header14}
                  textAlignRight
                />
              </div>
              <div className={styles.col3}>
                <PriceCell
                  label={value}
                  icon={null}
                  font={FontsEnum.Header14}
                  color={ColorsEnum.Blue}
                  textAlignRight
                />
              </div>
            </div>
          </TotalRow>
        )
      }}
    />
  )
}
