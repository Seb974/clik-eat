import userExtractor from '../helpers/userExtractor';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_UPDATED,
    UPDATE_PASSWORD_USER,
    USER_STOP_LOADING,
    AUTH_CLEAN_EVENTMESSAGE,
    DELETE_ACCOUNT,
  } from '../actions/types';
  
  const storedToken = localStorage.getItem('token') || "";
  const initialState = {
    token: storedToken || "",
    isAuthenticated: storedToken !== "" ? true : false,
    isLoading: false,
    user: storedToken !== "" ? userExtractor(storedToken) : null,
    eventMessage: '',
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
          eventMessage: '',
        };
        case USER_STOP_LOADING:
          return {
            ...state,
            isLoading: false,
            eventMessage: action.payload.eventMessage,
          };  
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: userExtractor(action.payload.token),
          eventMessage: '',
        };
      case AUTH_CLEAN_EVENTMESSAGE:
        return {
          ...state,
          isLoading: false,
          eventMessage: '',
        };
      case UPDATE_PASSWORD_USER:
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        let refreshUser = userExtractor(action.payload.token);
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', refreshUser);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          isLoading: false,
          user: refreshUser,
          eventMessage: action.payload.eventMessage,
        };
      case USER_UPDATED:
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        let user = userExtractor(action.payload.token);
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', user);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
          user: user,
          eventMessage: '',
        };
      case DELETE_ACCOUNT:
      case LOGOUT_SUCCESS:
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          if (localStorage.getItem('products')) {
             localStorage.removeItem('products')
          }
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false,
          eventMessage: action.type === DELETE_ACCOUNT ? action.payload.eventMessage : '',
        };
      default:
        return state;
    }
  }