import { uiReducer } from './uiReducer'
import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './../actions/uiActionTypes';

import { SELECT_COURSE } from './../actions/courseActionTypes'

describe('uiReducer tests', () => {

  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };


  it('check the state returned equals the initial state when no action is passed', () => {
    const action = {}
    expect(uiReducer(initialState, action)).toEqual(initialState)
  });

  it('check the state returned is equals the initial state when the action slect course is passed', () => {
    const action = { type: SELECT_COURSE }
    expect(uiReducer(initialState, action)).toEqual(initialState)
  });

  it('check the state returned is changed when DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly ', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER }
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    };
    expect(uiReducer(initialState, action)).toEqual(expectedState)
  })
})
