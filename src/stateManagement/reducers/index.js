import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { userReducer } from "./userReducer";

export const allReducers = combineReducers({
  userReducer: userReducer,
  globalReducer: globalReducer
});
