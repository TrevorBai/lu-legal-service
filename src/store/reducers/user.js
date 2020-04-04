import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const registerUserStart = state => {
  return updateObject(state, { loading: true });
};

const registerUserSuccess = (state, action) => {
  const newUser = { ...action.formData.user };
  return updateObject(state, {
    user: newUser,
    loading: false
  });
};

const registerUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const fetchUserStart = state => {
  return updateObject(state, { loading: true });
};

const fetchUserSuccess = (state, action) => {
  const fetchedUser = { ...action.userData };
  return updateObject(state, {
    user: fetchedUser,
    loading: false
  });
};

const fetchUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    user: null
  });
};

const logoutUserStart = state => {
  return updateObject(state, { loading: true });
};

const logoutUserSuccess = state => {
  return updateObject(state, {
    user: null,
    loading: false
  });
};

const logoutUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const logoutUserAllStart = state => {
  return updateObject(state, { loading: true });
};

const logoutUserAllSuccess = state => {
  return updateObject(state, {
    user: null,
    loading: false
  });
};

const logoutUserAllFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const loginUserStart = state => {
  return updateObject(state, { loading: true });
};

const loginUserSuccess = (state, action) => {
  const fetchedUser = { ...action.formData.user };
  return updateObject(state, {
    user: fetchedUser,
    loading: false
  });
};

const loginUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER_START:
      return registerUserStart(state);
    case actionTypes.REGISTER_USER_SUCCESS:
      return registerUserSuccess(state, action);
    case actionTypes.REGISTER_USER_FAIL:
      return registerUserFail(state, action);
    case actionTypes.FETCH_USER_START:
      return fetchUserStart(state);
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USER_FAIL:
      return fetchUserFail(state, action);
    case actionTypes.LOGOUT_USER_START:
      return logoutUserStart(state);
    case actionTypes.LOGOUT_USER_SUCCESS:
      return logoutUserSuccess(state);
    case actionTypes.LOGOUT_USER_FAIL:
      return logoutUserFail(state, action);
    case actionTypes.LOGOUT_USER_ALL_START:
      return logoutUserAllStart(state);
    case actionTypes.LOGOUT_USER_ALL_SUCCESS:
      return logoutUserAllSuccess(state);
    case actionTypes.LOGOUT_USER_ALL_FAIL:
      return logoutUserAllFail(state, action);
    case actionTypes.LOGIN_USER_START:
      return loginUserStart(state);
    case actionTypes.LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action);
    case actionTypes.LOGIN_USER_FAIL:
      return loginUserFail(state, action);
    default:
      return state;
  }
};

export default userReducer;
