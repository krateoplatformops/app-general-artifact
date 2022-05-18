import axios from 'axios'
import uris from './uris'
import { store } from './redux/store'
import { userReset, redirect } from './redux/actions'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = uris.apiBase
axiosInstance.defaults.withCredentials = true
// axiosInstance.defaults.timeout = 2000

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
    console.log(error)
    if (error.name === 'AxiosError') {
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
    if (error.response.status === 401 && window.location.pathname !== '/') {
      store.dispatch(userReset())
      store.dispatch(redirect('/'))
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
