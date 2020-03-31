import * as actionTypes from './actionTypes';
import axios from 'axios';

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};

export const bookAppointment = formData => {
  return async dispatch => {
    dispatch(bookAppointmentStart());
    try {
      const response = await axios.post(
        'https://lu-legal-services-server.herokuapp.com/appointments',
        formData
      );
      dispatch(bookAppointmentSuccess(response.data));
    } catch (e) {
      dispatch(bookAppointmentFail(e));
    }
  };
};

export const bookAppointmentStart = () => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_START
  };
};

export const bookAppointmentSuccess = formData => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_SUCCESS,
    formData
  };
};

export const bookAppointmentFail = error => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_FAIL,
    error
  };
};

export const bookAppointmentInit = () => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_INIT
  };
};
