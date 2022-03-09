import { notifyConstants } from '../constants'

const initialState = {
  notificationQueue: []
}

export default function notify(state = initialState, action) {
  switch (action.type) {
    case notifyConstants.PUSH_NOTIFICATION:
      return {
        ...state,
        notificationQueue: state.notificationQueue.concat(action.payload)
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