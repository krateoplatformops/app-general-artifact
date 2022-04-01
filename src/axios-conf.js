import axios from 'axios'
import uris from './uris'
import { store } from './redux/store'
import { userReset, redirect } from './redux/actions'
import { uiConstants } from './constants'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = uris.apiBase
axiosInstance.defaults.withCredentials = true

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
    if (!error.response) {
      const err = {
        response: {
          data: {
            message: uiConstants.messages.network_error,
            statusCode: 500
          }
        }
      }
      return Promise.reject(err)
    }
    if (error.response.status === 401 && window.location.pathname !== '/') {
      store.dispatch(userReset())
      store.dispatch(redirect('/'))
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
