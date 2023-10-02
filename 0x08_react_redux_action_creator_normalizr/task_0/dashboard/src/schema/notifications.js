import * as notificationData from './../../../../notifications.json'

const getAllNotificationsByUser = (userId) => {
  return notificationData
    .default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context)
}

export default getAllNotificationsByUser;
