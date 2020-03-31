import * as actionTypes from './actionTypes';
import axios from 'axios';

export const registerUser = formData => {
  return async dispatch => {
    dispatch(registerUserStart());
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users',
        formData
      );
      dispatch(registerUserSuccess(response.data));
    } catch (error) {
      dispatch(registerUserFail(error.response.data.error));
    }
  };
};

export const registerUserStart = () => {
  return {
    type: actionTypes.REGISTER_USER_START
  };
};

export const registerUserSuccess = formData => {
  return {
    type: actionTypes.REGISTER_USER_SUCCESS,
    formData
  };
};

export const registerUserFail = error => {
  return {
    type: actionTypes.REGISTER_USER_FAIL,
    error
  };
};

export const registerUserInit = () => {
  return {
    type: actionTypes.REGISTER_USER_INIT
  };
};
