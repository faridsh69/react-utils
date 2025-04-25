import { IMAGE_BASE_URL_DEV, IMAGE_BASE_URL_PROD } from 'constants/constants'

import { isProd } from './helpers'
import { TypeLSUserModel } from './helpers.types'
import { getLs } from './localstorage'

export const getAuthUser = (): Partial<TypeLSUserModel> => {
  return getLs('user', {})
}

export const getAuthUserOrganizationId = (): number => {
  return getAuthUser().organization_id || 0
}

export const getAuthUserAccessToken = (): string => {
  return getAuthUser().access_token || '-'
}

export const logoutUser = () => {
  localStorage.setItem('user', '')
  window.location.href = '/login'
}

export const getUserName = (user: Partial<TypeLSUserModel>): string => {
  return `${user.first_name} ${user.last_name}`
}

export const getUserAvatar = (user: Partial<TypeLSUserModel>): string => {
  const baseUrl = isProd() ? IMAGE_BASE_URL_PROD : IMAGE_BASE_URL_DEV

  return `${baseUrl}${user.avatar}`
}
