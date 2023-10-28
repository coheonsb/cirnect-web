import type { UseFetchOptions } from 'nuxt/app'
import { useMainStore } from '~/stores/main'

function getOptions<T> (
  url: string,
  options: UseFetchOptions<T> = {},
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE'
) {
  const config = useAppConfig()
  const store = useMainStore()

  const defaultHeader = {
    Authorization: `Bearer ${store.$state?.authorization}`
  }

  Object.assign(defaultHeader, options.headers)

  const defaults: UseFetchOptions<any> = {
    // baseURL: config,
    headers: defaultHeader,
    server: false,
    method,
    watch: false
  }
  Object.assign(defaults, options)
  return defaults
}

async function request (
  url: string,
  options: Object,
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE'
) {
  useError()
  const option = getOptions(url, options, method)
  const { data, error, refresh, execute, status } = await useFetch(url, option)

  if (status.value === 'idle') {
    await refresh()
  }
  // debugger
  return { data, error, refresh, execute, status }
}

const api = async <T>(
  url: string,
  options: UseFetchOptions<T> = {},
  method: 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'DELETE'
) => {
  const { data, error, status } = await request(url, options, method)
  if (status.value !== 'success' && status.value === 'error') {
    if (error.value?.statusCode === 401 || error.value?.statusCode === 403) {
      return
    }

    const errorResponse = error.value?.data
    const errorMessage = `${errorResponse?.message}`

    throw createError(error.value || 'Error')
  }

  return data.value as any
}

export const $api = {

  $get: async <T>(url: string, options: UseFetchOptions<T> = {}) =>
    await api(url, options, 'GET'),
  $post: async <T>(url: string, options: UseFetchOptions<T> = {}) =>
    await api(url, options, 'POST'),
  $put: async <T>(url: string, options: UseFetchOptions<T> = {}) =>
    await api(url, options, 'PUT'),
  $patch: async <T>(url: string, options: UseFetchOptions<T> = {}) =>
    await api(url, options, 'PATCH'),
  $delete: async <T>(url: string, options: UseFetchOptions<T> = {}) =>
    await api(url, options, 'DELETE')
}
