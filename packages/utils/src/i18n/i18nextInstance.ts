import { I18_CONFIG } from 'constants/constants'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import deTranslation from './de/translations.json'
import enTranslation from './en/translations.json'

export const i18nextUtils = i18next.createInstance()

i18nextUtils.use(initReactI18next).init({
  ...I18_CONFIG,
  resources: {
    en: {
      translations: enTranslation,
    },
    de: {
      translations: deTranslation,
    },
  },
})
