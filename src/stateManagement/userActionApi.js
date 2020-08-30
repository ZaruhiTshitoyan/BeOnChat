import firebase_config from "@/config/firebase";

import {
  onRegistering,
  onRegisterFail,
  onLoging,
  onLoginFail,
  onLogingout
} from "./actions/userActions";
import { showUiMessage } from "./actions/uiActionAlerts";
import {
  setToLocalStorage,
  clearFromLocalStorage
} from "@/storageManagement/localStorage";
// import { Login, Register } from "../customApi/user";
import browserHistory from "@/helpers/history";
import { ALERT_SUCCESS, ALERT_ERROR } from "./actionTypes";

export const onRegister = userData => async dispatch => {
  try {
    const res = await Register(userData);
    dispatch(onRegistering(userData, res.message));
    dispatch(showUiMessage({ type: ALERT_SUCCESS,
      message: res.message }));
    browserHistory.push("/login");
  } catch (err) {
    dispatch(onRegisterFail(err.message));
    dispatch(showUiMessage({ type: ALERT_ERROR,
      message: err.message }));
  }
}; 

export const onLogin = userData => async dispatch => {
  try {
    const res = await firebase_config
      .auth()
      .signInWithEmailAndPassword(userData.email, userData.password);
    browserHistory.push("/");
    setToLocalStorage("loginToken", res.token);
    // const { username } = userData;
    // setToLocalStorage("username", username);
    dispatch(onLoging());
    dispatch(showUiMessage({ type: ALERT_SUCCESS,
      message: "" }));
  } catch (err) {
    dispatch(onLoginFail());
    dispatch(showUiMessage({ type: ALERT_ERROR,
      message: err.message }));
  }
};

export const onLogout = () => dispatch => {
  const res = firebase_config.auth().signOut();
  console.log("res", res);
  clearFromLocalStorage("loginToken");
  clearFromLocalStorage("username");
  dispatch(onLogingout());
};
