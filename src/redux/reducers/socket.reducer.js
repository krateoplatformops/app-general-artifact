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
        subscriptions: state.subscriptions.filter((n) => n !== action.payload),
        events: state.events.filter((n) => n.transactionId !== action.payload)
      }
    case socketConstants.SOCKET_RECEIVED:
      return {
        ...state,
        events: state.events
          .concat(action.payload)
          .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
      }
    default:
      return state
  }
}
