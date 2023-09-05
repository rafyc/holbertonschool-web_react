import React from "react"

const NotificationItem = ({ type, html, value }) => {
  return (
    html ? <li data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li> : <li data-priority={type}>{value}</li>
  )
}
export default NotificationItem;
