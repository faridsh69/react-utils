import { useEffect, useMemo } from 'react'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { handleException } from 'helpers/handleException'
import { emptyPromise, getFormalCase, isArray, isObject } from 'helpers/helpers'
import { toast } from 'react-toastify'
import { QUERY_CLIENT } from 'services/apis/queryConstants'

import {
  ApiKeyMapType,
  TypeModel,
  TypePayload,
  TypePayloadDelete,
  TypeUseCrud,
} from '../interfaces/services'

const trans = (word: string) => word

export const useCrud = <T>(
  UTILS_QUERY_KEY_APIS: ApiKeyMapType,
  queryKey = '',
  modelId = 0,
  filters = {},
  configs: Partial<UseQueryOptions> = {},
): TypeUseCrud<T> => {
  const {
    listApi = emptyPromise,
    singleApi = emptyPromise,
    createApi = emptyPromise,
    updateApi = emptyPromise,
    deleteApi = emptyPromise,
  } = UTILS_QUERY_KEY_APIS[queryKey]

  const listApiResponse = QUERY_CLIENT.getQueryData([queryKey])

  const {
    data: listApiData,
    error: listApiError,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, filters],
    queryFn: async () => {
      const response: any = await listApi?.(filters)

      const apiResponse = response?.data

      QUERY_CLIENT.setQueryData([queryKey], apiResponse)

      if (isArray(apiResponse)) return apiResponse
      if (isArray(apiResponse?.data)) return apiResponse?.data || []
      if (isArray(apiResponse?.data?.data)) return apiResponse?.data?.data || []

      return []
    },
    placeholderData: [],
    enabled: configs.enabled ? configs.enabled : !!listApi,
    ...configs,
  })

  const list = useMemo(() => {
    return listApiData || []
  }, [listApiData]) as T[]

  const {
    data: single,
    error: singleApiError,
    isFetching: isFetchingSingle,
  } = useQuery({
    queryKey: [queryKey, modelId],
    queryFn: async () => {
      const response: any = await singleApi(modelId)
      const apiResponse = response?.data as any

      return isObject(apiResponse?.data) ? apiResponse.data : apiResponse || {}
    },
    placeholderData: {},
    enabled: !!modelId,
  })

  const createMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => createApi(payload.data),
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      const createdModel = apiResponse.data.data
      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (createdModel && list && isArray(list)) {
          return [createdModel, ...list]
        }

        return [createdModel]
      })

      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) {
        toast.success(trans(getFormalCase(queryKey) + ' created successfully'))
      }
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.()

      if (!payload.hideToast) {
        handleException(error, 'Creating Api Error: ' + queryKey)
        toast.warning(trans(queryKey + ' not created'))
      }
    },
  })

  const updateMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => updateApi(payload.data),
    onMutate: (payload: TypePayload<T>) => {
      const { data } = payload
      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (!list || !isArray(list)) return []

        const updatedList = list.map(item =>
          item.id !== data.id
            ? item
            : {
                ...item,
                ...data,
              },
        )

        return updatedList
      })

      if (single?.id === data?.id) {
        QUERY_CLIENT.setQueryData([queryKey, modelId], (single: TypeModel) => {
          return {
            ...single,
            ...data,
          }
        })
      }
    },
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) {
        toast.success(trans(getFormalCase(queryKey) + ' updated successfully'))
      }
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.()

      if (!payload.hideToast) {
        handleException(error, 'Updating Api Error: ' + queryKey)
        toast.warning(getFormalCase(queryKey) + ' not updated')
      }
    },
  })

  const deleteApiFn = (payload: TypePayloadDelete) => deleteApi(payload.id)

  const deleteMutation = useMutation({
    mutationFn: deleteApiFn,
    onSuccess: (apiResponse: any, payload: TypePayloadDelete) => {
      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (list) {
          return list.filter(item => item.id !== payload.id)
        }

        return []
      })
      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) {
        toast.success(trans(getFormalCase(queryKey) + ' deleted successfully'))
      }
    },
    onError: (error: any, payload: TypePayloadDelete) => {
      payload.onError?.()

      if (!payload.hideToast) {
        handleException(error, 'Deleting Api Error: ' + queryKey)
        toast.warning(trans(getFormalCase(queryKey) + ' not deleted'))
      }
    },
  })

  useEffect(() => {
    if (listApiError) {
      handleException(listApiError, 'Fetching list Api: ' + queryKey)
      return
    }

    if (singleApiError) {
      handleException(singleApiError, 'Showing item Api: ' + queryKey)
      return
    }
  }, [listApiError, singleApiError, queryKey])

  return {
    list,
    listApiResponse,
    isLoading: isFetching,
    isError: !!listApiError,
    single,
    isLoadingSingle: isFetchingSingle,
    createMutation,
    updateMutation,
    deleteMutation,
  }
}
