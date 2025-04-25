import { UIEvent } from 'react'
import { isUndefined } from 'helpers/helpers'
import { i18nextUtils } from 'i18n/i18nextInstance'
import { OptionValueType } from 'types/types'

import { EMPTY_OPTION, SCROLL_THRESHOLD } from './Select.constants'
import { SelectDisplayedOption, SelectGroup, SelectOption, SelectValue } from './Select.types'

export const getDisplayedOptions = (
  options: SelectOption[],
  searchTerm: string,
  value: SelectValue,
  groups: SelectGroup[],
  isOnlySelected: boolean,
) => {
  const filteredOptions = options.filter(
    option => findInString(option.label, searchTerm) && !isUndefined(option.value),
  )
  const optionsWithSelected = filteredOptions.map(option => {
    return { ...option, isSelected: getIsSelectedOption(option.value, value) }
  })
  const groupedOptions = getGroupedOptions(optionsWithSelected, groups)

  if (!isOnlySelected) return groupedOptions

  return groupedOptions.filter(option => option.isSelected)
}

const findInString = (bigString: string, searchWord: string): boolean =>
  bigString?.toLowerCase?.()?.includes(searchWord?.toLowerCase?.()?.trim())

const getIsSelectedOption = (optionValue: OptionValueType, value: SelectValue) => {
  if (Array.isArray(value)) {
    return !!value.find(selectedOption => selectedOption.value === optionValue)
  }

  return value === optionValue
}

const getGroupedOptions = (
  options: SelectOption[],
  groups: SelectGroup[],
): SelectDisplayedOption[] => {
  if (!groups.length) return options

  const output = []

  for (const group of groups) {
    const groupOptions = options.filter(o => o.groupId === group.id)
    if (!groupOptions.length) continue

    output.push({
      label: group.label,
      value: 'group-id-' + group.id,
      isGroupOption: true,
    })
    output.push(...groupOptions)
  }

  const withoutGroupOptions = options.filter(o => !o.groupId)

  if (withoutGroupOptions.length) {
    output.push({
      label: i18nextUtils.t('Others'),
      value: 'group-id-' + 0,
      isGroupOption: true,
    })
    output.push(...withoutGroupOptions)
  }

  return output
}

export const getTriggerSelectedOption = (
  options: SelectOption[],
  value: SelectValue,
  multiple: boolean,
) => {
  if (!value) return EMPTY_OPTION

  if (!multiple || typeof value !== 'object') {
    return options.find(option => option.value === value) || EMPTY_OPTION
  }

  if (value.length === 0) return EMPTY_OPTION
  if (value.length === 1) return value[0]

  return { ...EMPTY_OPTION, label: `${value.length} ${i18nextUtils.t('items')}` }
}

export const getFinalValue = (
  option: SelectDisplayedOption,
  multiple: boolean,
  value: OptionValueType | SelectOption[],
): OptionValueType | SelectOption[] => {
  if (multiple) {
    const multipleValue = value as SelectOption[]
    if (option.isSelected) {
      return multipleValue?.filter?.(val => val.value !== option.value)
    }

    delete option.isSelected

    return multipleValue ? [...multipleValue, option] : [option]
  }

  if (option.isSelected) {
    return undefined
  }

  return option.value
}

export const getIsScrolledBottom = (e: UIEvent<HTMLDivElement>) => {
  const target = e.target as HTMLDivElement

  return Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) <= SCROLL_THRESHOLD
}
