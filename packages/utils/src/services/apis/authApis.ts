import { getAuthUserOrganizationId } from 'helpers/userMethods'

import { AUTH_API_CLIENT } from './clients/clients'

export const getAuthUsersApi = () =>
  AUTH_API_CLIENT.get({
    endpoint: 'users',
    data: {
      organization_id: [getAuthUserOrganizationId()],
      with: ['profile'],
      is_active: 'all',
    },
  })

export const postAuthLoginApi = () =>
  AUTH_API_CLIENT.post({
    endpoint: 'login',
    data: {
      email: 'xxx@xxx.de',
      password: 'xxxxxx',
      remember_me: true,
    },
  })
