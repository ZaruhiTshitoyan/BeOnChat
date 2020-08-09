import { ALERT_CLEAR } from "../actionTypes";

export const showUiMessage = ({ type, message }) => ({
  type,
  message
});

export const clearUiMessage = () => ({
  type: ALERT_CLEAR,
  message: ""
});
