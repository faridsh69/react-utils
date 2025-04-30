export enum SizesEnum {
  S = 's',
  M = 'm',
  L = 'l',
}

export enum SizesPixelEnum {
  s = '30',
  m = '40',
  l = '50',
}

export enum FontsEnum {
  Text12 = '--font-text-12',
  Text14 = '--font-text-14',
  Text16 = '--font-text-16',
  Header12 = '--font-header-12',
  Header14 = '--font-header-14',
  Header16 = '--font-header-16',
  Header18 = '--font-header-18',
  Header20 = '--font-header-20',
  Header22 = '--font-header-22',
  Header26 = '--font-header-26',
  Header30 = '--font-header-30',
}

export enum ColorsEnum {
  Black = 'var(--black)',
  White = 'var(--white)',
  Grey100 = 'var(--grey-100)',
  Grey200 = 'var(--grey-200)',
  Grey500 = 'var(--grey-500)',
  Grey600 = 'var(--grey-600)',
  Grey900 = 'var(--grey-900)',

  Blue = 'var(--main-light)',
  BlueDark = 'var(--main-dark)',
  BlueTransparent = '#e2ecef',

  Green = 'var(--success-light)',
  GreenDark = 'var(--success-dark)',
  GreenTransparent = 'var(--success-transparent)',

  Orange = 'var(--warning-light)',
  OrangeDark = 'var(--warning-dark)',
  OrangeTransparent = 'var(--warning-transparent)',

  Red = 'var(--danger-light)',
  RedDark = 'var(--danger-dark)',
  RedTransparent = 'var(--danger-transparent)',
}

export enum InputComponentsEnum {
  Text = 'text',
  Textarea = 'textarea',
  Select = 'select',
  Radio = 'radio',
  Checklist = 'checklist',
  ToggleButton = 'toggleButton',
  Checkbox = 'checkbox',
  Date = 'date',
  Group = 'group',
  TotalRow = 'totalRow',
  Custom = 'custom',
  CustomComponentWithController = 'CustomComponentWithController',
}

export enum InputTextMasksEnum {
  String = 'string',
  Number = 'number',
  Float = 'float',
  PriceEn = 'PriceEn',
  PriceDe = 'PriceDe',
}

export enum InputDateTypesEnum {
  Date = 'date',
  Year = 'year',
  Month = 'month',
  DateRange = 'date-range',
  YearRange = 'year-range',
  MonthRange = 'month-range',
  WeekRange = 'week-range',
}

export enum PlacementsEnum {
  Left = 'left',
  Top = 'top',
  Bottom = 'bottom',
  Right = 'right',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  LeftStart = 'left-start',
  LedftEnd = 'left-end',
}

export enum DirectionsEnum {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export enum VariantsEnum {
  Dark = 'dark',
  Light = 'light',
  Outline = 'outline',
  Ghost = 'ghost',
}

export enum SidesEnum {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  All = 'all',
}

export enum IconsEnum {
  Plus = 'plus',
  Calendar = 'calendar',
  Edit = 'edit',
  Phone = 'phone',
  Ok = 'ok',
  Cancel = 'cancel',
  Trash = 'trash',
  Mail = 'mail',
  View = 'view',
  Money = 'money',
  Invisible = 'invisible',
  Visible = 'visible',
  Copy = 'copy',
  ArrowTop = 'arrowTop',
  ArrowBottom = 'arrowBottom',
  ArrowRight = 'arrowRight',
  NotFound = 'notFound',
  Required = 'required',
  Info = 'info',
  ThreeDots = 'threeDots',
  File = 'file',
  Download = 'download',
}

export enum ActionsEnum {
  OnClick = 'onClick',
  OnContextMenu = 'onContextMenu',
}
