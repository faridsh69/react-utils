import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

type TypeErrorValidation = { message: string; property: string }

export type TypeErrorHandlerInterceptor = (
  error: AxiosError<{ message: TypeErrorValidation[] }>,
) => Promise<AxiosError>

export type TypeResponseInterceptor = (response: AxiosResponse) => AxiosResponse

export type TypeRequestInterceptor = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig

export type TypeAxiosMethod = (parameters: {
  endpoint: string
  data?: object
  options?: object
}) => Promise<AxiosResponse>

export type CreateApiClientType = (
  baseURL: string,
  auth?: boolean,
  addPartnerId?: boolean,
) => {
  get: TypeAxiosMethod
  post: TypeAxiosMethod
  put: TypeAxiosMethod
  patch: TypeAxiosMethod
  remove: TypeAxiosMethod
}

export type TypeModel = {
  [key: string]: string | number | boolean | null | undefined | any
}

export type TypeListApiMethod = (filters?: any) => Promise<AxiosResponse<TypeModel[]>>
export type TypeSingleApiMethod = (id: number) => Promise<AxiosResponse<TypeModel>>
export type TypeCreateApiMethod = (data: TypeModel) => Promise<AxiosResponse<TypeModel>>
export type TypeUpdateApiMethod = (data: TypeModel) => Promise<AxiosResponse<TypeModel>>
export type TypeDeleteApiMethod = (id: number) => Promise<AxiosResponse<void>>

export type TypeApis = {
  listApi: TypeListApiMethod
  singleApi: TypeSingleApiMethod
  createApi: TypeCreateApiMethod
  updateApi: TypeUpdateApiMethod
  deleteApi: TypeDeleteApiMethod
}
export type ApiKeyMapType = {
  [key: string]: Partial<TypeApis>
}

export type TypePayload<T> = {
  data: Partial<T> & { id?: number }
  onSuccess?: (apiRes: any) => void
  onError?: () => void
  hideToast?: boolean
}

export type TypePayloadDelete = {
  id: number
  onSuccess?: (apiRes: any) => void
  onError?: () => void
  hideToast?: boolean
}

export type TypeUseCrud<T> = {
  list: T[]
  listApiResponse: any
  single?: T
  isLoading: boolean
  isLoadingSingle: boolean
  isError: boolean

  createMutation: {
    mutate: (payload: TypePayload<T>) => void
    isPending: boolean
    error: Error | null
  }

  updateMutation: {
    mutate: (payload: TypePayload<T>) => void
    isPending: boolean
    error: Error | null
  }

  deleteMutation: {
    mutate: (payload: TypePayloadDelete) => void
    isPending: boolean
    error: Error | null
  }
}
