import { socketConstants } from '../constants'

const initialState = {
  subscriptions: [],
  events: []
}

export default function socket(state = initialState, action) {
  switch (action.type) {
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
    case socketConstants.SOCKET_RECEIVED:
      return {
        ...state,
        events: state.events.concat(action.payload)
      }
    default:
      return state
  }
}
