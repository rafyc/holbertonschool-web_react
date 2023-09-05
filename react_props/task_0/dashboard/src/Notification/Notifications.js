import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../Utils/utils';

function Notifications() {
  return (
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
    </div>
  );
}

export default Notifications;
