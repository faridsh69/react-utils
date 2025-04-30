import { BASE_API_CLIENT } from './clients/clients'

const COMMON = 'posts'

export const getProductsApi = (filters: any) =>
  BASE_API_CLIENT.get({
    endpoint: `${COMMON}`,
    data: {
      page: filters.page,
      per_page: filters.perPage,
    },
  })

export const getProductApi = (entityId: number) => {
  return BASE_API_CLIENT.get({
    endpoint: `${COMMON}/${entityId}`,
  })
}

export const createProductApi = (data: any) =>
  BASE_API_CLIENT.post({
    endpoint: COMMON,
    data,
  })

export const updateProductApi = (data: any) =>
  BASE_API_CLIENT.put({
    endpoint: `${COMMON}/${data.id}`,
    data,
  })

export const deleteProductApi = (entityId: number) =>
  BASE_API_CLIENT.remove({
    endpoint: `${COMMON}/${entityId}`,
  })
