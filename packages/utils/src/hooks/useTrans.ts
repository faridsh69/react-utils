import { i18nextUtils } from 'i18n/i18nextInstance'
import { useTranslation } from 'react-i18next'

export const useTrans = (ns = 'translations', options?: any) =>
  useTranslation(ns, {
    i18n: i18nextUtils,
    ...options,
  })
