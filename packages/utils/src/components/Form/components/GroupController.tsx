import { useCallback } from 'react'
import clsx from 'clsx'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { IconsEnum, VariantsEnum } from 'enums/enums'
import { useFieldArray } from 'react-hook-form'

import { FORM_GROUP_ADD } from '../Form.constants'
import { getInputController } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import styles from '../Form.module.scss'

export const GroupController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name: groupName,
    inputs = [],
    label = 'Add new item',
    noItemsLabel = 'No item added yet.',
    disabled = false,
    hiddenInputLabelsBasedOnIndex,
    errors,
  } = props

  const { fields, append, remove } = useFieldArray({
    control,
    name: groupName,
  })

  const handleAddRow = useCallback(() => {
    append({})
    onChangeInput?.({ [groupName]: FORM_GROUP_ADD })
  }, [onChangeInput])

  const handleRemoveRow = useCallback(
    (rowIndex: number) => {
      remove(rowIndex)
      onChangeInput?.({ [groupName]: rowIndex })
    },
    [onChangeInput],
  )

  const hideInput = useCallback(
    (input: any, fieldIndex: number) => {
      if (!hiddenInputLabelsBasedOnIndex) return false

      const hiddenInputLabels = hiddenInputLabelsBasedOnIndex(fieldIndex)

      return hiddenInputLabels.includes(input.label)
    },
    [hiddenInputLabelsBasedOnIndex],
  )
  const rootErrorMessage = errors?.[groupName]?.root?.message

  return (
    <div className={styles.groupsWrapper}>
      <div className={styles.groups}>
        {!fields.length && (
          <div className={styles.noItems}>
            <Label label={noItemsLabel} disabled />
          </div>
        )}
        {fields.map((_, fieldIndex) => {
          return (
            <div className={styles.group} key={fieldIndex}>
              <div className={clsx(styles.row, styles.groupInputs)}>
                {inputs.map(input => {
                  const { name, columns = 12, component, ...rest } = input
                  if (hideInput(input, fieldIndex)) return null

                  const InputController = getInputController(component)
                  const inputName = `${groupName}.${fieldIndex}.${name}`

                  return (
                    <div key={inputName} className={styles[`col${columns}`]}>
                      <InputController
                        name={inputName}
                        control={control}
                        onChangeInput={onChangeInput}
                        {...rest}
                      />
                    </div>
                  )
                })}
              </div>
              {!disabled && (
                <div className={styles.groupRemove}>
                  <Button icon={IconsEnum.Trash} onClick={() => handleRemoveRow(fieldIndex)} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <Label label={rootErrorMessage} hasError />
      {!disabled && (
        <div className={styles.groupAdd}>
          <Button label={label} onClick={handleAddRow} variant={VariantsEnum.Outline} />
        </div>
      )}
    </div>
  )
}
