import { Label } from 'components/Label/Label'
import { PriceCell } from 'components/Table/tableCells/PriceCell'
import { TotalRow } from 'components/TotalRow/TotalRow'
import { ColorsEnum, FontsEnum } from 'enums/enums'
import { Controller } from 'react-hook-form'

import { InputControllerProps } from '../Form.types'
import styles from '../Form.module.scss'

export const TotalRowController = (props: InputControllerProps) => {
  const { control, name, label, active } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => {
        return (
          <TotalRow active={active}>
            <div className={styles.row}>
              <div className={styles.col9}>
                <Label
                  label={label}
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
