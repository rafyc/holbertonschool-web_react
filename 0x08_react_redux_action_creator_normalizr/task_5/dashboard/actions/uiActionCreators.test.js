import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes'

describe('uiActionCreators creators tests', () => {
  it('test action login', () => {
    const email = 'rafa@holberton.fr';
    const password = 'holberton';
    const action = { type: LOGIN, user: { email, password } };
    expect(login(email, password)).toEqual(action);
  });
});
