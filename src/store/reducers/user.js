import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  user: null,
  loading: false,
  error: null,
  updateSuccess: false
};

const registerUserStart = (state) => {
  return updateObject(state, { loading: true });
};

const registerUserSuccess = (state, action) => {
  const newUser = { ...action.formData.user };
  return updateObject(state, {
    user: newUser,
    loading: false,
  });
};

const registerUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const loginUserStart = (state) => {
  return updateObject(state, { loading: true });
};

const loginUserSuccess = (state, action) => {
  const fetchedUser = { ...action.formData.user };
  return updateObject(state, {
    user: fetchedUser,
    loading: false,
  });
};

const loginUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const passwordResetStart = (state) => {
  return updateObject(state, { loading: true });
};

const passwordResetSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
  });
};

const passwordResetFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const fetchUserStart = (state) => {
  return updateObject(state, {
    loading: true,
  });
};

const fetchUserSuccess = (state, action) => {
  const fetchedUser = { ...action.userData };
  return updateObject(state, {
    user: fetchedUser,
    loading: false,
  });
};

const fetchUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    user: null,
  });
};

const fetchUserByIdStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchUserByIdSuccess = (state, action) => {
  return updateObject(state, {
    user: action.userData,
    loading: false,
  });
};

const fetchUserByIdFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
    user: null,
  });
};

const logoutUserStart = (state) => {
  return updateObject(state, { loading: true });
};

const logoutUserSuccess = (state) => {
  return updateObject(state, {
    user: null,
    loading: false,
  });
};

const logoutUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const logoutUserAllStart = (state) => {
  return updateObject(state, { loading: true });
};

const logoutUserAllSuccess = (state) => {
  return updateObject(state, {
    user: null,
    loading: false,
  });
};

const logoutUserAllFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const updateUserProfileStart = (state) => {
  return updateObject(state, { loading: true });
};

const updateUserProfileSuccess = (state, action) => {
  const updatedUser = { ...action.updatedProfile };
  return updateObject(state, {
    user: updatedUser,
    loading: false,
  });
};

const updateUserProfileFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const updateUserPasswordStart = (state) => {
  return updateObject(state, { loading: true });
};

const updateUserPasswordSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    updateSuccess: true
  });
};

const updateUserPasswordFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const deleteUserStart = (state) => {
  return updateObject(state, { loading: true });
};

const deleteUserSuccess = (state) => {
  return updateObject(state, {
    user: null,
    loading: false,
  });
};

const deleteUserFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const resetUserError = (state, action) => {
  return updateObject(state, {
    error: null
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
    case actionTypes.LOGIN_USER_START:
      return loginUserStart(state);
    case actionTypes.LOGIN_USER_SUCCESS:
      return loginUserSuccess(state, action);
    case actionTypes.LOGIN_USER_FAIL:
      return loginUserFail(state, action);
    case actionTypes.PASSWORD_RESET_START:
      return passwordResetStart(state);
    case actionTypes.PASSWORD_RESET_SUCCESS:
      return passwordResetSuccess(state, action);
    case actionTypes.PASSWORD_RESET_FAIL:
      return passwordResetFail(state, action);
    case actionTypes.FETCH_USER_START:
      return fetchUserStart(state);
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USER_FAIL:
      return fetchUserFail(state, action);
    case actionTypes.FETCH_USER_BY_ID_START:
      return fetchUserByIdStart(state);
    case actionTypes.FETCH_USER_BY_ID_SUCCESS:
      return fetchUserByIdSuccess(state, action);
    case actionTypes.FETCH_USER_BY_ID_FAIL:
      return fetchUserByIdFail(state, action);
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
    case actionTypes.UPDATE_USER_PROFILE_START:
      return updateUserProfileStart(state);
    case actionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return updateUserProfileSuccess(state, action);
    case actionTypes.UPDATE_USER_PROFILE_FAIL:
      return updateUserProfileFail(state, action);
    case actionTypes.UPDATE_USER_PASSWORD_START:
      return updateUserPasswordStart(state);
    case actionTypes.UPDATE_USER_PASSWORD_SUCCESS:
      return updateUserPasswordSuccess(state, action);
    case actionTypes.UPDATE_USER_PASSWORD_FAIL:
      return updateUserPasswordFail(state, action);
    case actionTypes.DELETE_USER_START:
      return deleteUserStart(state);
    case actionTypes.DELETE_USER_SUCCESS:
      return deleteUserSuccess(state);
    case actionTypes.DELETE_USER_FAIL:
      return deleteUserFail(state, action);
    case actionTypes.RESET_USER_ERROR:
      return resetUserError(state, action);
    default:
      return state;
  }
};

export default userReducer;
