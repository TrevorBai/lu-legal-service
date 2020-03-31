import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: null
};

const registerUserStart = state => {
  return updateObject(state, { loading: true });
};

const registerUserSuccess = (state, action) => {
  const newUser = { ...action.formData.user };
  return updateObject(state, {
    user: newUser,
    loading: false,
    token: action.formData.token
  });
};

const registerUserFail = (state, action) => {
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
    default:
      return state;
  }
};

export default userReducer;
