import axios from 'axios'
import { router } from '../router'
import useUserStore from '../stores/user'

const API_ROOT = ''
const requestHandleError = (e: any) => {
  if (e.response.status === 401) {
    router.navigate('/login')
  }
  return Promise.reject(e)
}

export const req = axios.create({
  baseURL: API_ROOT || '/',
  timeout: 20000,
})
req.interceptors.request.use(
  (config) => {
    config.headers.Authorization = useUserStore.getState().token
    return config
  },
  (error) => Promise.reject(error),
)
req.interceptors.response.use(
  (response) => response.data,
  (e) => requestHandleError(e),
)
