import { isProd } from 'helpers/helpers'

const TESTING_API_DOMAINS = {
  base: 'https://testing.domain.com',
  auth: 'https://auth-testing.domain.com',
}

const PRODUCTION_API_DOMAINS = {
  base: 'https://domain.com',
  auth: 'https://auth.domain.com',
}

const isProduction = isProd()

export const API_ENDPOINTS = {
  base: isProduction ? PRODUCTION_API_DOMAINS.base : TESTING_API_DOMAINS.base,
  auth: isProduction ? PRODUCTION_API_DOMAINS.auth : TESTING_API_DOMAINS.auth,
}
