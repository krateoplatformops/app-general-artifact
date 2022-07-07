import { socketConstants } from '../constants'

export const socketInit = () => {
  return {
    type: socketConstants.SOCKET_INIT
  }
}

export const socketInitError = () => {
  return {
    type: socketConstants.SOCKET_INIT_ERROR
  }
}

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

export const socketEvent = (payload) => {
  return {
    type: socketConstants.SOCKET_EVENT,
    payload
  }
}

export const socketEventSetAllRead = () => {
  return {
    type: socketConstants.SOCKET_EVENT_SET_ALL_READ
  }
}

export const socketEventRemove = (payload) => {
  return {
    type: socketConstants.SOCKET_EVENT_REMOVE,
    payload
  }
}
