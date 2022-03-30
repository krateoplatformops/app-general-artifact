import { socketConstants } from '../constants'

export const socketSubscribe = (payload) => {
  return {
    type: socketConstants.SOCKET_SUBSCRIBE,
    payload
  }
}

export const socketUnsubscribe = () => {
  return {
    type: socketConstants.SOCKET_UNSUBSCRIBE
  }
}

export const socketReceived = (payload) => {
  return {
    type: socketConstants.SOCKET_RECEIVED,
    payload
  }
}
