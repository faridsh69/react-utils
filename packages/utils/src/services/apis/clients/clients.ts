import { API_ENDPOINTS } from './clientDomains'
import { createApiClient } from './createApiClient'

export const AUTH_API_CLIENT = createApiClient(API_ENDPOINTS.auth)
export const BASE_API_CLIENT = createApiClient(API_ENDPOINTS.base)
