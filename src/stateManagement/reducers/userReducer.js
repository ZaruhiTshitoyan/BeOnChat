const initialState = {
  isLoggedUser: false,
  userData: []
};

const onRegisterSuccess = (state, action) => {
  const userDataList = {
    userData: [...state.userData, action.userData]
  };
  return updateState(state, userDataList);
};

const onLoginSuccess = (state, action) => {
  const { isLoggedUser } = action;
  const userDataList = {
    isLoggedUser,
    userData: [...state.userData]
  };
  return updateState(state, userDataList);
};

const onLogout = (state, action) => {
  const { isLoggedUser } = action;
  const userDataList = {
    isLoggedUser,
    userData: [...state.userData]
  };
  return updateState(state, userDataList);
};

const onAuthFailure = (state, action) => {
  const { isLoggedUser } = action;
  const userDataList = {
    isLoggedUser,
    userData: [...state.userData]
  };
  return updateState(state, userDataList);
};

const updateState = (state, userDataList) => {
  const { isLoggedUser, userData } = userDataList;
  return {
    ...state,
    isLoggedUser,
    userData
  };
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const userReducer = createReducer(initialState, {
  LOGIN_SUCCESS: onLoginSuccess,
  REGISTER_SUCCESS: onRegisterSuccess,
  LOGOUT: onLogout,
  REGISTER_FAIL: onAuthFailure,
  LOGIN_FAIL: onAuthFailure
});
