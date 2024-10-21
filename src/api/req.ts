import axios from 'axios'

const requestHandleError = (e: any) => {}
const API_ROOT = ''
export const req = axios.create({
  baseURL: API_ROOT || '/',
  timeout: 20000,
})
req.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'set token here'
    return config
  },
  (error) => Promise.reject(error),
)
req.interceptors.response.use(
  (response) => response.data,
  (e) => requestHandleError(e),
)
