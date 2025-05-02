import { useCallback, useEffect, useMemo, useState } from 'react'
import { ZINDEXES } from 'constants/constants'
import { ActionsEnum, PlacementsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'interfaces/interfaces'

import { Popover } from '../Popover/Popover'
import { Menu } from './components/Menu'
import { Trigger } from './components/Trigger'
import { SelectTriggerComponents } from './Select.enums'
import { getTriggerSelectedOption } from './Select.helpers'
import { SelectOption, SelectProps } from './Select.types'
import styles from './Select.module.scss'

export const Select = (props: SelectProps) => {
  const {
    options = [],
    groups = [],
    multiple = false,
    value,
    onChange,
    size = SizesEnum.M,
    placement = PlacementsEnum.BottomEnd,
    disabled = false,
    trigger = { component: SelectTriggerComponents.Input },
    isOpen: propIsOpen = false,
    setIsOpen: propSetIsOpen,
    isSearchable = true,
    onSearch,
    onScrollToBottom,
    width,
    height = 250,
    zIndex = ZINDEXES.select,
    isLoading = false,
    label,
    placeholder,
    required,
    hasError,
    hint,
    hintZIndex,
  } = props

  const [isOpen, setIsOpen] = useState(propIsOpen)

  useEffect(() => {
    if (propIsOpen === isOpen) return

    setIsOpen(propIsOpen)
  }, [propIsOpen])

  useEffect(() => {
    if (propIsOpen === isOpen) return

    propSetIsOpen?.(isOpen)
  }, [isOpen])

  const [searchTerm, setSearchTerm] = useState('')

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)

    setSearchTerm('')
  }, [propSetIsOpen, setSearchTerm])

  const handleClearInput = useCallback(() => {
    onChange?.((multiple ? ([] as SelectOption[]) : undefined) as OptionValueType & SelectOption[])
  }, [onChange, multiple])

  const triggerSelectedOption = useMemo(() => {
    return getTriggerSelectedOption(options, value, multiple)
  }, [options, value, multiple])

  return (
    <Popover
      placement={placement}
      disabled={disabled}
      openOnAction={ActionsEnum.OnClick}
      zIndex={zIndex}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      overlay={
        <Menu
          multiple={multiple}
          value={value}
          onChange={onChange}
          options={options}
          groups={groups}
          size={size}
          isSearchable={isSearchable}
          searchTerm={searchTerm}
          onSearch={onSearch}
          setSearchTerm={setSearchTerm}
          onScrollToBottom={onScrollToBottom}
          handleCloseMenu={handleCloseMenu}
          width={width}
          height={height}
          isLoading={isLoading}
        />
      }
    >
      <div className={styles.wrapper} style={{ width }}>
        <Trigger
          triggerSelectedOption={triggerSelectedOption}
          size={size}
          disabled={disabled}
          trigger={trigger}
          isActive={isOpen}
          handleClearInput={handleClearInput}
          width={width}
          clearable={false}
          label={label}
          placeholder={placeholder}
          required={required}
          hasError={hasError}
          hint={hint}
          hintZIndex={hintZIndex}
        />
      </div>
    </Popover>
  )
}
