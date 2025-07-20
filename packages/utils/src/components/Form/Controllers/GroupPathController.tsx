import { useCallback, useMemo } from 'react'
import clsx from 'clsx'
import { BreadCrumb } from 'components/BreadCrumb/BreadCrumb'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { IconsEnum, VariantsEnum } from 'enums/enums'
import { useFieldIndexesAtom, usePathAtom } from 'hooks/usePathAtom'
import { useAtom } from 'jotai'
import { useFieldArray } from 'react-hook-form'

import { InputComponentsEnum } from '../Form.enums'
import { getInputController } from '../Form.helpers'
import { InputControllerProps } from '../Form.types'
import styles from '../Form.module.scss'

export const GroupPathController = (props: InputControllerProps) => {
  const {
    control,
    onChangeInput,
    name: groupName,
    fieldName,
    inputs = [],
    label = 'Add new item',
    noItemsLabel = 'No item added yet.',
    disabled = false,
    hiddenInputLabelsBasedOnIndex,
    errors,
    checkPathInBreadcrumb = false,
    arrowButtonPath,
    breadCrumbOptions = [],
    uikitMapper,
  } = props

  const { fields, append, remove } = useFieldArray({
    control,
    name: groupName,
  })

  const handleAddRow = useCallback(() => {
    append({})
    onChangeInput?.({ [groupName]: 'xxx' })
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

  // rendering path based groups
  const [fieldIndexes, setFieldIndexes] = useAtom(useFieldIndexesAtom)
  // @ts-ignore
  const currentFieldIndex = fieldIndexes[fieldName] as number

  const currentPath = breadCrumbOptions[breadCrumbOptions.length - 1]?.path
  const [path, setPath] = useAtom(usePathAtom)
  const isSamePath = path === currentPath
  const showForm = !checkPathInBreadcrumb || isSamePath
  const showActionButtons = !disabled && showForm
  const isParentGroup = path.includes(currentPath)

  const filteredInputs = useMemo(() => {
    return inputs.filter(input => {
      if (!showForm) return input.component === InputComponentsEnum.GroupPath

      return isParentGroup && input.component !== InputComponentsEnum.GroupPath
    })
  }, [inputs, showForm, fieldIndexes, isParentGroup])
  // console.log(currentPath, isParentGroup, showForm)

  const handleChangePath = (fieldIndex: number) => {
    window.history.pushState({}, '', arrowButtonPath)
    setPath(arrowButtonPath || '')
    setFieldIndexes((p: any) => ({
      ...p,
      // @ts-ignore
      [fieldName]: fieldIndex,
    }))
  }

  return (
    <div className={styles.groupsWrapper}>
      {showForm && <BreadCrumb options={breadCrumbOptions} />}

      <div className={styles.groups}>
        {!fields.length && showForm && (
          <div className={styles.noItems}>
            <Label label={noItemsLabel} disabled />
          </div>
        )}
        {fields.map((_, fieldIndex) => {
          const isWrongParentIndex =
            isParentGroup && !isSamePath && currentFieldIndex !== fieldIndex

          return (
            <div
              className={clsx(styles.group, isWrongParentIndex && styles.isWrongParentIndex)}
              key={fieldIndex}
            >
              <div className={clsx(styles.row, styles.groupInputs)}>
                {filteredInputs.map(input => {
                  const { name, columns = 12, component, ...rest } = input
                  if (hideInput(input, fieldIndex)) return null

                  const InputController = getInputController(component)
                  const inputName = `${groupName}.${fieldIndex}.${name}`

                  return (
                    <div key={inputName} className={styles[`col-${columns}`]}>
                      <InputController
                        name={inputName}
                        control={control}
                        onChangeInput={onChangeInput}
                        uikitMapper={uikitMapper}
                        {...rest}
                      />
                    </div>
                  )
                })}
              </div>
              {showActionButtons && (
                <div className={styles.groupRemove}>
                  <Button icon={IconsEnum.Trash} onClick={() => handleRemoveRow(fieldIndex)} />
                </div>
              )}
              {showActionButtons && arrowButtonPath && (
                <div className={styles.groupRemove}>
                  <Button
                    icon={IconsEnum.ArrowRight}
                    onClick={() => handleChangePath(fieldIndex)}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <Label label={rootErrorMessage} hasError />
      {showActionButtons && (
        <div className={styles.groupAdd}>
          <Button
            label={label}
            icon={IconsEnum.Plus}
            onClick={handleAddRow}
            variant={VariantsEnum.Outline}
          />
        </div>
      )}
    </div>
  )
}
