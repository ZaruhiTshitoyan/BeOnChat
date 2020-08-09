const initialState = {
  uiMessage: ""
};

const notification = [];

const updateState = (state, notification) => {
  const uiMessage = notification.pop();
  return {
    ...state,
    uiMessage
  };
};

const alertUiMessage = (state, action) => {
  const { message } = action;
  notification.push(message);
  return updateState(state, notification);
};

const alertClear = (state, action) => {
  const { message } = action;
  notification.push(message);
  return updateState(state, notification);
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const globalReducer = createReducer(initialState, {
  ALERT_SUCCESS: alertUiMessage,
  ALERT_ERROR: alertUiMessage,
  ALERT_CLEAR: alertClear
});
