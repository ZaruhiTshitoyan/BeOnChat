import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL
} from "../actionTypes";

export const onRegistering = userData => ({
  type: REGISTER_SUCCESS,
  userData
});

export const onRegisterFail = () => ({
  type: REGISTER_FAIL
});

export const onLoging = () => ({
  type: LOGIN_SUCCESS,
  isLoggedUser: true
});

export const onLoginFail = () => ({
  type: LOGIN_FAIL
});

export const onLogingout = () => ({
  type: LOGOUT,
  isLoggedUser: false
});
