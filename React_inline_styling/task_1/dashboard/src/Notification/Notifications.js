import React, { Component } from "react";
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  // shouldComponentUpdate(nextProps) {
  //   if (nextProps.listNotifications.length === this.props.listNotifications.length) {
  //     return false;
  //   }
  //   return true;
  // }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }


  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className='container'>
        <div className={css(styles.menuItem)}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
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
            <ul>
              {listNotifications.length == 0 ? <p>No new notification for now</p> : <p>Here is the list of notifications</p>}
              {listNotifications.map((ele) => (
                <NotificationItem key={ele.id} type={ele.type} value={ele.value} html={ele.html} markAsRead={this.markAsRead} />
              ))}
            </ul>
          </div >
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notifications: {
    border: '2px dotted #e1484c',
    padding: '1rem .5rem 0 .5rem',
    float: 'right',
  },
  menuItem: {
    textAlign: 'right',
  }

});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}

export default Notifications;
