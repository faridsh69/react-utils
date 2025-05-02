import { TypeModel } from 'services/interfaces/services'

import { getLs } from './localstorage'

export const getAuthUser = (): Partial<TypeModel> => {
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

export const getUserName = (user: Partial<TypeModel>): string => {
  return `${user.first_name} ${user.last_name}`
}
