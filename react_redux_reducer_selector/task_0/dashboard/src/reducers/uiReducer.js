import {
  LOGIN,
  LOGOUT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state, isUserLoggedIn: true
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state, isUserLoggedIn: flase
      }
    }
    case LOGOUT: {
      return {
        ...state, isUserLoggedIn: false
      }
    }
    case HIDE_NOTIFICATION_DRAWER: {
      return {
        ...state, isNotificationDrawerVisible: false
      }
    }
    case DISPLAY_NOTIFICATION_DRAWER: {
      return {
        ...state, isNotificationDrawerVisible: true
      }
    }
    default:
      return state
  }
}
