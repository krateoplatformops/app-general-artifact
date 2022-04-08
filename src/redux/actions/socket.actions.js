import { socketConstants } from '../constants'

export const socketSubscribe = (payload) => {
  return {
    type: socketConstants.SOCKET_SUBSCRIBE,
    payload
  }
}

export const socketUnsubscribe = (payload) => {
  return {
    type: socketConstants.SOCKET_UNSUBSCRIBE,
    payload
  }
}

export const socketReceived = (payload) => {
  return {
    type: socketConstants.SOCKET_RECEIVED,
    payload
  }
}

export const socketPull = (payload) => {
  return {
    type: socketConstants.SOCKET_PULL,
    payload
  }
}
