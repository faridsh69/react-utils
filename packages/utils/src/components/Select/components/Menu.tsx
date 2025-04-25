import { ChangeEvent, UIEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { clsx } from 'clsx'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { TextInput } from 'components/TextInput/TextInput'
import { IconsEnum, SidesEnum } from 'enums/enums'
import { useTrans } from 'hooks/useTrans'
import { OptionValueType } from 'types/types'

import { getDisplayedOptions, getFinalValue, getIsScrolledBottom } from '../Select.helpers'
import { MenuProps, SelectDisplayedOption, SelectOption } from '../Select.types'
import { MenuOptions } from './MenuOptions'
import styles from '../Select.module.scss'

export const Menu = (props: MenuProps) => {
  const {
    options,
    groups,
    multiple,
    value,
    hasValue,
    onChange,
    size,
    isSearchable,
    searchTerm,
    onSearch,
    setSearchTerm,
    onScrollToBottom,
    handleCloseMenu,
    width,
    height,
    showOnlySelecteds,
    isLoading,
  } = props

  const { t } = useTrans()

  const [isOnlySelected, setIsOnlySelected] = useState(false)

  const displayedOptions = useMemo(() => {
    return getDisplayedOptions(options, searchTerm, value, groups, isOnlySelected)
  }, [options, searchTerm, value, groups, isOnlySelected])

  useEffect(() => {
    if (isOnlySelected && !displayedOptions.length) {
      setIsOnlySelected(false)
    }
  }, [displayedOptions, isOnlySelected])

  const handleClickOption = useCallback(
    (option: SelectDisplayedOption) => {
      if (onChange && !option.disabled) {
        const finalValue = getFinalValue(option, multiple, value)
        onChange(finalValue as SelectOption[] & OptionValueType)
      }

      if (!multiple) {
        handleCloseMenu()
      }
    },
    [multiple, value, onChange, handleCloseMenu],
  )

  const handleChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
      onSearch?.(e)
    },
    [onSearch, setSearchTerm],
  )

  const handleScrollMenu = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      if (isOnlySelected || isLoading || !onScrollToBottom) return

      if (getIsScrolledBottom(e)) {
        onScrollToBottom()
      }
    },
    [isOnlySelected, onScrollToBottom, isLoading],
  )

  const showOnlySelected = showOnlySelecteds && hasValue

  const [showSearch, setDelayShowSearch] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setDelayShowSearch(true)
    }, 10)
  }, [])

  return (
    <>
      {isSearchable && showSearch && (
        <TextInput
          value={searchTerm}
          onChange={handleChangeSearch}
          size={size}
          width={width}
          placeholder={t('Search')}
          icon={IconsEnum.View}
          autoFocus={true}
          noBorderRadiuses={[SidesEnum.Bottom]}
          noBorderColors={[SidesEnum.Left, SidesEnum.Right, SidesEnum.Top]}
        />
      )}
      <div
        className={clsx(styles.menu, styles[`size-${size}`], isSearchable && styles.isSearchable)}
        style={{ maxHeight: height, width }}
      >
        {showOnlySelected && (
          <div className={styles.onlySelected}>
            <Checkbox
              checked={isOnlySelected}
              onChange={setIsOnlySelected}
              label={t('Only selecteds')}
              size={size}
            />
          </div>
        )}

        {isLoading ? (
          <div className={styles.isLoading}>
            <DataNotFound isLoading />
          </div>
        ) : !displayedOptions.length ? (
          <div className={styles.nothingFound}>
            <DataNotFound />
          </div>
        ) : (
          <MenuOptions
            size={size}
            multiple={multiple}
            options={displayedOptions}
            handleClickOption={handleClickOption}
            handleScrollMenu={handleScrollMenu}
          />
        )}
      </div>
    </>
  )
}
