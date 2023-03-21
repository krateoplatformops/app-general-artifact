import { notifyConstants } from '../constants'

const initialState = {
  notificationQueue: []
}

export default function notify(state = initialState, action) {
  switch (action.type) {
    case notifyConstants.PUSH_NOTIFICATION:
      if (action.payload.message === '') {
        return state
      }
      return {
        ...state,
        notificationQueue: state.notificationQueue
          .filter((x) => x.message !== action.payload.message)
          .concat(action.payload)
      }
    case notifyConstants.REMOVE_NOTIFICATION:
      return {
        ...state,
        notificationQueue: state.notificationQueue.filter(
          (n) => n.guid !== action.payload
        )
      }
    default:
      return state
  }
}
