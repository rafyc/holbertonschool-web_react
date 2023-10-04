import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

describe('markAsAread action creators tests', () => {
  it(' Calling markAsAread creator with 1 as an argument', () => {
    const action = { type: MARK_AS_READ, index: 1 };
    expect(markAsAread(1)).toEqual(action);
  });
  it(' Calling setNotificationFilter creator with 1 as an argument', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'DEFAULT' };
    expect(setNotificationFilter('DEFAULT')).toEqual(action);
  });
});
