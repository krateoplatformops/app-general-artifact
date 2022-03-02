import axios from 'axios'
import { store } from './redux/store'
import {
  dashboardReset,
  insightReset,
  logReset,
  projectReset,
  redirect
} from './redux/actions'
import { uiConstants } from './constants'

const axiosInstance = axios.create()

const { apiBaseUrl } = window['runConfig']

axiosInstance.defaults.baseURL = apiBaseUrl
axiosInstance.defaults.withCredentials = true

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accepted: 'application/json',
      'Content-Type': 'application/json'
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
    if (error.response.status === 401) {
      // TODO: redirect to login page
      // store.dispatch(dashboardReset())
      // store.dispatch(insightReset())
      // store.dispatch(logReset())
      // store.dispatch(projectReset())
      // store.dispatch(redirect('/'))
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
