import * as notificationData from '../../../../notifications.json'
import { schema, normalize } from 'normalizr';

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid'
})
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

export const getAllNotificationsByUser = (userId) => {
  return notificationData
    .default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context)
}

export const normalizedUser = normalize(notificationData, [notification])
