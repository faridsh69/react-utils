import { isProd } from 'helpers/helpers'

const TESTING_API_DOMAINS = {
  auth: 'https://auth-testing.domain.com',
  base: 'https://jsonplaceholder.typicode.com',
}

const PRODUCTION_API_DOMAINS = {
  auth: 'https://auth.domain.com',
  base: 'https://domain.com',
}

const isProduction = isProd()

export const API_ENDPOINTS = {
  base: isProduction ? PRODUCTION_API_DOMAINS.base : TESTING_API_DOMAINS.base,
  auth: isProduction ? PRODUCTION_API_DOMAINS.auth : TESTING_API_DOMAINS.auth,
}
