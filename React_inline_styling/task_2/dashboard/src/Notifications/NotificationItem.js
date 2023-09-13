import React from "react";
import { useMemo } from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
  const liProps = useMemo(() => {
    const props = { 'data-notification-type': type };
    if (html) props.dangerouslySetInnerHTML = html;
    return props;
  }, [type, html]);

  const colorType = styles[type] || styles.default;

  return (
    <li {...liProps} className={css(colorType)} onClick={() => { (markAsRead(id)) }}>{value}</li>
  )
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  }
});

NotificationItem.proptype = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => { },
}

export default NotificationItem;
