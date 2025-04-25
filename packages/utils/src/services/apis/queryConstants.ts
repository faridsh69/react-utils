import { QueryClient } from '@tanstack/react-query'
import { handleException } from 'helpers/handleException'
import { ApiKeyMapType } from 'services/interfaces/services'

import { getAuthUsersApi, postAuthLoginApi } from './authApis'
import {
  createProductApi,
  deleteProductApi,
  getProductApi,
  getProductsApi,
  updateProductApi,
} from './productApis'

export const UTILS_QUERY_KEYS = {
  auth: {
    users: 'Auth User',
    login: 'Auth login',
  },
  base: {
    products: 'base products',
  },
}

export const UTILS_QUERY_KEY_APIS: ApiKeyMapType = {
  [UTILS_QUERY_KEYS.auth.users]: {
    listApi: getAuthUsersApi,
  },
  [UTILS_QUERY_KEYS.auth.login]: {
    listApi: postAuthLoginApi,
  },
  [UTILS_QUERY_KEYS.base.products]: {
    listApi: getProductsApi,
    singleApi: getProductApi,
    createApi: createProductApi,
    updateApi: updateProductApi,
    deleteApi: deleteProductApi,
  },
}

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      gcTime: 1000 * 3600, // Keep cached data for 1 hour
    },
    mutations: {
      // @ts-ignore
      onError: handleException,
    },
  },
})
