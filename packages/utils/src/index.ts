import { SCHEMAS } from 'components/Form/schemas'
import {
  API_PER_PAGE,
  DATE_FNS_FORMATS,
  DATE_MOMENT_FORMATS,
  DEFAULT_DEBOUNCE_TIME,
  I18_CONFIG,
  IMAGE_URLS,
  INVALIDATE_QUERY_CONFIG,
  SORTING_METHODS,
  ZINDEXES,
} from 'constants/constants'
import {
  getReorderedPositions,
  getUniqueArray,
  getUniqueArrayByPropery,
  sortArray,
} from 'helpers/arrayMethods'
import {
  calculateObjectPropertySum,
  calculatePercentNumber,
  calculatePercentOf,
  floorNumber,
  renderPriceFormat,
  roundNumber,
} from 'helpers/calculationHelpers'
import { getDaysAfter, getGermanDate, getServerDate } from 'helpers/dateHelpers'
import {
  debounceMethod,
  debounceMethodWithAllPromises,
  debounceMethodWithPromise,
} from 'helpers/debounce'
import { handleException } from 'helpers/handleException'
import {
  callPhone,
  downloadFile,
  emptyPromise,
  getFormalCase,
  getSnakeCase,
  getUniqueId,
  getUpperCase,
  getWindowDimensions,
  isArray,
  isDev,
  isFunction,
  isInString,
  isNull,
  isNumber,
  isObject,
  isObjectEmpty,
  isPressedEnter,
  isPressedEsc,
  isProd,
  isString,
  isUndefined,
  openUrl,
  sendEmail,
} from 'helpers/helpers'
import { getLs, removeLs, setLs } from 'helpers/localstorage'
import {
  getAuthUser,
  getAuthUserAccessToken,
  getAuthUserOrganizationId,
  getUserName,
} from 'helpers/userMethods'
import { useDebounceMethod } from 'hooks/useDebounceMethod'
import { useDebounceValue } from 'hooks/useDebounceValue'
import { useElementVisiblity } from 'hooks/useElementVisiblity'
import { useEventListener } from 'hooks/useEventListener'
import { useInternetConnection } from 'hooks/useInternetConnection'
import { useIsTextFit } from 'hooks/useIsTextFit'
import { useMetaTags } from 'hooks/useMetaTags'
import { usePersistState } from 'hooks/usePersistState'
import { useRunOnlyOnChange } from 'hooks/useRunOnlyOnChange'
import { useToggle } from 'hooks/useToggle'
import { useWindowDimensions } from 'hooks/useWindowDimention'
import { createApiClient } from 'services/apis/clients/createApiClient'
import { QUERY_CLIENT } from 'services/apis/queryConstants'
import { useCrud } from 'services/hooks/useCrud'

export {
  calculateObjectPropertySum,
  calculatePercentNumber,
  calculatePercentOf,
  callPhone,
  createApiClient,
  debounceMethod,
  debounceMethodWithAllPromises,
  debounceMethodWithPromise,
  downloadFile,
  emptyPromise,
  floorNumber,
  getAuthUser,
  getAuthUserAccessToken,
  getAuthUserOrganizationId,
  getDaysAfter,
  getFormalCase,
  getGermanDate,
  getLs,
  getReorderedPositions,
  getServerDate,
  getSnakeCase,
  getUniqueArray,
  getUniqueArrayByPropery,
  getUniqueId,
  getUpperCase,
  getUserName,
  getWindowDimensions,
  handleException,
  isArray,
  isDev,
  isFunction,
  isInString,
  isNull,
  isNumber,
  isObject,
  isObjectEmpty,
  isPressedEnter,
  isPressedEsc,
  isProd,
  isString,
  isUndefined,
  openUrl,
  removeLs,
  renderPriceFormat,
  roundNumber,
  sendEmail,
  setLs,
  sortArray,
}

export {
  API_PER_PAGE,
  DATE_FNS_FORMATS,
  DATE_MOMENT_FORMATS,
  DEFAULT_DEBOUNCE_TIME,
  I18_CONFIG,
  IMAGE_URLS,
  INVALIDATE_QUERY_CONFIG,
  QUERY_CLIENT,
  SCHEMAS,
  SORTING_METHODS,
  ZINDEXES,
}

export {
  useCrud,
  useDebounceMethod,
  useDebounceValue,
  useElementVisiblity,
  useEventListener,
  useInternetConnection,
  useIsTextFit,
  useMetaTags,
  usePersistState,
  useRunOnlyOnChange,
  useToggle,
  useWindowDimensions,
}

export { Table } from 'components/Table/Table'
export { TABLE_NO_DATA } from 'components/Table/Table.constants'
export { TableCellComponents, TableSeparators } from 'components/Table/Table.enums'
export type { TableCell, TableColumn, TableProps, TableRow } from 'components/Table/Table.types'

export { Form } from 'components/Form/Form'
export { FORM_NO_LABEL } from 'components/Form/Form.constants'
export type {
  FormInput,
  FormProps,
  FormSchemaType,
  InputControllerProps,
} from 'components/Form/Form.types'

export { TotalRow } from 'components/TotalRow/TotalRow'
export type { TotalRowProps } from 'components/TotalRow/TotalRow.types'

export { Confirm } from 'components/Confirm/Confirm'
export type { ConfirmProps } from 'components/Confirm/Confirm.types'

export { Label } from 'components/Label/Label'
export type { LabelProps } from 'components/Label/Label.types'

export { Modal } from 'components/Modal/Modal'
export type { ModalProps } from 'components/Modal/Modal.types'

export { Image } from 'components/Image/Image'
export type { ImageProps } from 'components/Image/Image.types'

export { Loader } from 'components/Loader/Loader'
export type { LoaderProps } from 'components/Loader/Loader.types'

export { Popover } from 'components/Popover/Popover'
export type { PopoverProps } from 'components/Popover/Popover.types'

export { DataNotFound } from 'components/DataNotFound/DataNotFound'
export type { DataNotFoundProps } from 'components/DataNotFound/DataNotFound.types'

export { Select } from 'components/Select/Select'
export { SelectTriggerComponents } from 'components/Select/Select.enums'
export type {
  SelectGroup,
  SelectOption,
  SelectProps,
  SelectValue,
  TriggerProp,
} from 'components/Select/Select.types'

export { Button } from 'components/Button/Button'
export type { ButtonProps } from 'components/Button/Button.types'

export { RadioList } from 'components/RadioList/RadioList'
export type { RadioListProps } from 'components/RadioList/RadioList.types'

export { CheckList } from 'components/CheckList/CheckList'
export type { CheckListProps } from 'components/CheckList/CheckList.types'

export { Chip } from 'components/Chip/Chip'
export type { ChipProps } from 'components/Chip/Chip.types'

export { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'
export type { ToggleButtonsProps } from 'components/ToggleButtons/ToggleButtons.types'

export { TabItems } from 'components/TabItems/TabItems'
export type { TabItemsProps } from 'components/TabItems/TabItems.types'

export { TextInput } from 'components/TextInput/TextInput'
export type { TextInputProps } from 'components/TextInput/TextInput.types'

export type { PriceCellProps } from 'components/Table/Table.types.ts'
export { PriceCell } from 'components/Table/tableCells/PriceCell'

export {
  ActionsEnum,
  ColorsEnum,
  DirectionsEnum,
  FontsEnum,
  InputComponentsEnum,
  InputDateTypesEnum,
  InputTextMasksEnum,
  PlacementsEnum,
  SizesEnum,
} from 'enums/enums'

export type { OptionValueType } from 'interfaces/interfaces'
export type { AuthUserModelType } from 'services/interfaces/auth.types'
export type {
  ApiKeyMapType,
  TypeModel,
  TypePayload,
  TypePayloadDelete,
} from 'services/interfaces/services'

// export { Suspender } from 'components/Suspender/Suspender'
// export type { SuspenderProps } from 'components/Suspender/Suspender.types'

// import prettierConfig from 'constants/.prettierrc.json'
// import eslintConfig from '../eslint.config.mjs'
// import typeScriptConfig from 'constants/typescript.config.json'
