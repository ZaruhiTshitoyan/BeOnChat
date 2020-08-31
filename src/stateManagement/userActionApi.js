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
  return firebase_config
    .auth()
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(response => {
      dispatch(onRegistering(userData, response.message));
      dispatch(showUiMessage({ type: ALERT_SUCCESS,
        message: response.message }));
      browserHistory.push("/login");
    })
    .catch (error => {
      dispatch(onRegisterFail(error.message));
      dispatch(showUiMessage({ type: ALERT_ERROR,
        message: error.message }));
    });
}; 

export const onLogin = userData => async dispatch => {
  return firebase_config
    .auth()
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(response => {
      browserHistory.push("/");
      console.log(response, "resfd");
      setToLocalStorage("loginToken", response.token);
      // const { username } = userData;
      // setToLocalStorage("username", username);
      dispatch(onLoging());
      dispatch(showUiMessage({ type: ALERT_SUCCESS,
        message: "" }));
    })
    .catch (error => {
      dispatch(onLoginFail());
      dispatch(showUiMessage({ type: ALERT_ERROR,
        message: error.message }));

    });
};

export const onLogout = () => dispatch => {
  const res = firebase_config.auth().signOut();
  console.log("res", res);
  clearFromLocalStorage("loginToken");
  clearFromLocalStorage("username");
  dispatch(onLogingout());
};
