import { ApiServices } from './../services/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useApi = (endpoint: string, token: string) => {
  const router = useRouter()

  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const post = (payload: Record<string, any>) => {
    loading.value = true
    error.value = null

    const result = ApiServices().post(endpoint, payload)

    try {
      data.value = result
      loading.value = false
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }

    return result
  }

  const get = (query?: Record<string, any>) => {
    loading.value = true
    error.value = null
    let queryString = ''

    if (query) {
      queryString =
        '?' +
        Object.entries(query)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&')
    }
    const result = ApiServices().get(endpoint + queryString)

    try {
      data.value = result
      loading.value = false
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }

    return result
  }

  return { data, error, loading, post, get }
}
