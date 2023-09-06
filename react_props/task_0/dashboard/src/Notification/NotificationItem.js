import React from "react";
import PropTypes from 'prop-types';
const NotificationItem = ({ type, html, value }) => {
  return (
    html ? <li data-priority={type} dangerouslySetInnerHTML={{ __html: html }}></li> : <li data-priority={type}>{value}</li>
  )
}

NotificationItem.prototype = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;
