import axios, { AxiosInstance } from 'axios'
import { getAuthUserAccessToken, getAuthUserOrganizationId, logoutUser } from 'helpers/userMethods'
import { i18nextUtils } from 'i18n/i18nextInstance'
import {
  CreateApiClientType,
  TypeAxiosMethod,
  TypeErrorHandlerInterceptor,
  TypeRequestInterceptor,
  TypeResponseInterceptor,
} from 'services/interfaces/services'

export const createApiClient: CreateApiClientType = (
  baseURL,
  auth = true,
  addPartnerId = false,
) => {
  const axiosInstance: AxiosInstance = axios.create({ baseURL })
  axiosInstance.interceptors.request.use(RequestInterceptor)

  if (auth) {
    axiosInstance.interceptors.request.use(authInterceptor)
  }
  if (addPartnerId) {
    axiosInstance.interceptors.request.use(partnerIdInterceptor)
  }

  axiosInstance.interceptors.response.use(responseInterceptor, errorHandlerInterceptor)

  axiosInstance.defaults.headers.common['Content-Language'] = i18nextUtils.language

  const get: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.get(endpoint, {
      params: data,
      ...options,
    })

  const post: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.post(endpoint, data, options)

  const put: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.put(endpoint, data, options)

  const patch: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.patch(endpoint, data, options)

  const remove: TypeAxiosMethod = ({ endpoint, data, options }) =>
    axiosInstance.delete(endpoint, {
      params: data,
      ...options,
    })

  return { get, post, put, patch, remove }
}

const RequestInterceptor: TypeRequestInterceptor = config => {
  config.headers['Content-Type'] = 'application/json'

  return config
}

const authInterceptor: TypeRequestInterceptor = config => {
  const accessToken = getAuthUserAccessToken()
  config.headers!.Authorization = `Bearer ${accessToken}`

  return config
}

const responseInterceptor: TypeResponseInterceptor = response => response

const errorHandlerInterceptor: TypeErrorHandlerInterceptor = error => {
  if (error.response && error.response.status === 401) {
    logoutUser()
    return Promise.reject('Your token is expired. Please login.')
  }

  return Promise.reject(error)
}

const partnerIdInterceptor: TypeRequestInterceptor = config => {
  config.headers['partner-id'] = getAuthUserOrganizationId()

  return config
}
