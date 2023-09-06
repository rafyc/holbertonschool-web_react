import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../Utils/utils';
import PropTypes from 'prop-types';


const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className='menuItem'>
        Your notifications
      </div>
      {displayDrawer && (
        <div className='Notifications'>
          <button
            style={{
              position: "absolute",
              right: "1rem",
              top: ".5rem",
              fontSize: "1rem",
              border: "none",
              background: "none",
              cursor: "pointer"
            }}
            aria-label="Close"
            onClick={() => {
              console.log("Close button has been clicked\n");
            }}

          >x</button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value='New course available' />
            <NotificationItem type="urgent" value='New resume available' />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div >
      )}
    </>
  );
}

Notifications.prototype = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}
export default Notifications;
