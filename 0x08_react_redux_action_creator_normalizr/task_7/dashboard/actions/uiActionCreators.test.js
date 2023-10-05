import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('uiActionCreators creators tests', () => {
  it('test action login', () => {
    const email = 'rafa@holberton.fr';
    const password = 'holberton';
    const action = { type: LOGIN, user: { email, password } };
    expect(login(email, password)).toEqual(action);
  });
});

it('should login success action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  fetchMock.restore();
  fetchMock.get('http://localhost:8080/login-success.json', '{}');
  return store.dispatch(loginRequest('email', 'password')).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'LOGIN',
      user: { email: 'email', password: 'password' },
    });
    expect(actions[1]).toEqual({ type: 'LOGIN_SUCCESS' });
  });
});

it('should return login failure action', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});
  fetchMock.restore();
  fetchMock.get('http://localhost:8080/login-success.json', 500);
  return store.dispatch(loginRequest('email', 'password')).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'LOGIN',
      user: { email: 'email', password: 'password' },
    });
  })
})
