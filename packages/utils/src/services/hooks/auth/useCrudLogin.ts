import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { AuthUserModelType } from 'services/interfaces/auth.types'

import { useCrud } from '../useCrud'

export const useCrudLogin = () => {
  return useCrud<AuthUserModelType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.auth.login)
}
