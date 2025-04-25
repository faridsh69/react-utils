import { BREAKLINE } from 'constants/constants'
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { getUniqueArray } from './arrayMethods'
import { isObject, isString } from './helpers'

export const handleException = (error: Error, errorSource = ''): void => {
  if (errorSource) {
    // eslint-disable-next-line no-console
    console.error('errorSource', errorSource, error)
  }

  const message = getErrorMessage(error, errorSource)

  if (isString(message)) {
    toast.error(message)
  }
}

const getErrorMessage = (error: any, errorSource = ''): string => {
  if (!error) {
    return 'Something went wrong.'
  }

  if (isString(error)) {
    if (
      error === 'Network Error' ||
      error.includes('502 Bad Gateway') ||
      error.includes('<title>Error</title>') ||
      error.includes('<title>500 Internal Server Error</title>')
    ) {
      return 'Please check your VPN and internet connection!'
    }

    if (error.includes('503 Service Temporarily Unavailable')) {
      return 'Maintenance mode, we will back soon!'
    }

    if (error === 'canceled') {
      return ''
    }

    return error
  }

  if (error.response?.data?.error) {
    const apiError = error.response.data.error

    if (isString(apiError)) {
      return apiError
    }

    if (isObject(apiError)) {
      return getValidationErrorMessage(apiError)
    }
  }

  if (error.response?.data?.message) {
    const apiError = error.response.data.message

    if (isString(apiError)) {
      return apiError
    }
  }

  if (isObject(error)) {
    if (error instanceof Error) {
      if (errorSource) {
        return `Error in ${errorSource}:${BREAKLINE} ${error.message}`
      }

      return error.message
    }

    if (!error) {
      return 'Something went wrong!'
    }

    const code = error.code ? `${BREAKLINE} (${error.code})` : null

    if (isString(error.error)) {
      return getErrorMessage(error.error, '') + code
    }

    if (isObject(error.error)) {
      return getValidationErrorMessage(error.error)
    }

    if (isString(error.message)) {
      return getErrorMessage(error.message, '')
    }

    return 'Error occured!'
  }

  return 'Error occured.'
}

const getValidationErrorMessage = (apiError: any) => {
  const errors = Object.values(apiError)
  const uniqueErrors = getUniqueArray<unknown>(errors)

  return uniqueErrors.join(BREAKLINE)
}
