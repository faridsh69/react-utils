import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'

import { useCrud } from '../useCrud'

export const useCrudProducts = () => useCrud(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.base.products)
