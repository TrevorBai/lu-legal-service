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
      localStorage.setItem('token', response.data.token);
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

export const fetchUser = token => {
  return async dispatch => {
    dispatch(fetchUserStart());
    try {
      const response = await axios.get(
        'http://localhost:5000/api/users/me',
        { headers: { Authorization: token }}
      );
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      dispatch(fetchUserFail(error.response.data.error));
    }
  };
};

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUserSuccess = userData => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    userData
  };
};

export const fetchUserFail = error => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error
  };
};