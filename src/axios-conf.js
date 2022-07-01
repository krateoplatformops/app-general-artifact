import axios from 'axios'
import uris from './uris'
import { store } from './redux/store'
import { userReset, redirect, addNotification } from './redux/actions'
import { uiConstants } from './constants'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = uris.apiBase
axiosInstance.defaults.withCredentials = true
axiosInstance.defaults.timeout = 30000

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accepted: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0'
    }
    return config
  },
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.code && error.message) {
      store.dispatch(
        addNotification(error.message, uiConstants.notification.error)
      )
    }
    if (error.name === 'AxiosError' && error.response.status !== 401) {
      const err = {
        response: {
          data: {
            message: error.response.data.message || error.message,
            statusCode: 500
          }
        }
      }
      return Promise.reject(err)
    }
    if (
      error.response.status === 401 &&
      window.location.pathname !== '/' &&
      !window.location.pathname.startsWith('/auth')
    ) {
      store.dispatch(userReset())
      store.dispatch(redirect('/'))
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
