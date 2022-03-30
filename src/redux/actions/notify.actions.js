import { notifyConstants } from '../constants'
import { timeHelper, securityHelper } from '../../helpers'

export function addNotification(message, severity) {
  return (dispatch) => {
    const notification = {
      message,
      time: timeHelper.currentTime(),
      guid: securityHelper.guid(),
      severity
    }
    dispatch(pushNotificationToQueue(notification))
    setTimeout(() => {
      dispatch(removeNotification(notification.guid))
    }, 7000)
  }
}

function pushNotificationToQueue(payload) {
  return {
    type: notifyConstants.PUSH_NOTIFICATION,
    payload
  }
}

export function removeNotification(guid) {
  return {
    type: notifyConstants.REMOVE_NOTIFICATION,
    payload: guid
  }
}
