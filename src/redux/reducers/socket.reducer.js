import { socketConstants } from '../constants'

const initialState = {
  subscriptions: [],
  init: false,
  error: false,
  events: []
}

export default function socket(state = initialState, action) {
  switch (action.type) {
    case socketConstants.SOCKET_INIT:
      return {
        ...state,
        init: true
      }
    case socketConstants.SOCKET_INIT_ERROR:
      return {
        ...state,
        error: true
      }
    case socketConstants.SOCKET_SUBSCRIBE:
      return {
        ...state,
        subscriptions: state.subscriptions.concat(action.payload)
      }
    case socketConstants.SOCKET_UNSUBSCRIBE:
      return {
        ...state,
        subscriptions: state.subscriptions.filter((n) => n !== action.payload)
      }
    case socketConstants.SOCKET_EVENT:
      return {
        ...state,
        events: state.events
          .concat(action.payload)
          .sort((a, b) => b.time - a.time)
      }
    case socketConstants.SOCKET_EVENT_SET_ALL_READ:
      return {
        ...state,
        events: state.events.map((n) => {
          return { ...n, read: true }
        })
      }
    default:
      return state
  }
}
