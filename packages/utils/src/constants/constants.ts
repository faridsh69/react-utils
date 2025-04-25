import { FontsEnum, SizesEnum } from '../enums/enums'

export const API_PER_PAGE = 20
export const DEFAULT_DEBOUNCE_TIME = 500
export const DEFAULT_VALIDATION_DELAY = 100
export const INVALIDATE_QUERY_CONFIG = { gcTime: 5000, refetchOnMount: true }

export const APP_LS_KEY = 'react-utils-ls'

export const ENVS = {
  testing: 'testing',
  development: 'development',
  production: 'production',
}

export const IMAGE_URLS = {
  trash:
    'https://cdn5.vectorstock.com/i/1000x1000/98/64/trash-can-icon-design-template-vector-33829864.jpg',
  ok: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/ok.png',
}

export const BREAKLINE = '\r\n'
export const IMAGE_BASE_URL_PROD = 'https://innos.s3.eu-central-1.amazonaws.com/'
export const IMAGE_BASE_URL_DEV = 'https://innos-testing.s3.eu-central-1.amazonaws.com/'
export const DATE_FNS_FORMATS = {
  GERMAN_DATE: 'dd.MM.yyyy',
  GERMAN_DATE_TIME: 'dd.MM.yyyy HH:mm:ss',
  SERVER_DATE: 'yyyy-MM-dd',
  SERVER_DATE_TIME: 'yyyy-MM-dd HH:mm:ss',
}
export const DATE_MOMENT_FORMATS = {
  GERMAN_DATE: 'DD.MM.YYYY',
  GERMAN_DATE_TIME: 'DD.MM.YYYY HH:mm:ss',
  SERVER_DATE: 'YYYY-MM-DD',
  SERVER_DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
}
export const SORTING_METHODS = {
  asc: 'asc',
  dsc: 'dsc',
}

export const LANGUAGES = {
  en: 'en-US',
  de: 'de-DE',
}

export const I18_CONFIG = {
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
  debug: false,
  resources: {
    en: {
      translation: {},
    },
    de: {
      translation: {},
    },
  },
}

export const ZINDEXES = {
  modalOverlay: 100,
  modal: 101,
  popover: 102,
  contextMenu: 103,
  select: 104,
  tooltip: 105,
  toast: 106,
}

export const ICON_SIZES_MAP = {
  [SizesEnum.S]: 12,
  [SizesEnum.M]: 14,
  [SizesEnum.L]: 16,
}

export const FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Text12,
  [SizesEnum.M]: FontsEnum.Text14,
  [SizesEnum.L]: FontsEnum.Text16,
}

export const BOLD_FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Header12,
  [SizesEnum.M]: FontsEnum.Header14,
  [SizesEnum.L]: FontsEnum.Header16,
}
