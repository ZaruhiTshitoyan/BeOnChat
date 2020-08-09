import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { allReducers } from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

const persistedState = loadState();
const logger = createLogger();

const store = createStore(
  allReducers,
  persistedState,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  saveState({
    userReducer: store.getState().userReducer
  });
});

export default store;
