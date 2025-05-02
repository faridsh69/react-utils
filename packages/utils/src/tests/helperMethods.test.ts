import { getFormalCase, getSnakeCase, getUpperCase, isInString } from 'helpers/helpers'
import { expect, test } from 'vitest'

import { getUniqueArray, getUniqueArrayByPropery } from '../helpers/arrayMethods'
import {
  calculatePercentNumber,
  calculatePercentOf,
  floorNumber,
  renderPriceFormat,
  roundNumber,
} from '../helpers/calculationHelpers'

test('Checking helper methods', () => {
  expect(roundNumber(3.143)).toBe(3.14)
  expect(roundNumber(3.147)).toBe(3.15)
  expect(floorNumber(3.147)).toBe(3.14)
  expect(calculatePercentNumber(1000, 210)).toBe(21)
  expect(calculatePercentOf(1000, 21)).toBe(210)
  expect(renderPriceFormat(1000)).toBe('1.000,00')
  expect(getSnakeCase('FaridDeveloper')).toBe('farid_developer')
  expect(getUpperCase('farid')).toBe('Farid')
  expect(getFormalCase('farid_developer')).toBe('Farid developer')
  expect(isInString('farid_developer', 'farid')).toBe(true)
  expect(getUniqueArray([1, 1, 1]).length).toBe(1)
  expect(
    getUniqueArrayByPropery(
      [
        { id: 1, name: 'x' },
        { id: 1, name: 'y' },
      ],
      'id',
    ).length,
  ).toBe(1)
})
