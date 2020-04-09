import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as path from '../../constants/api/urls';
import Cookies from 'js-cookie';

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
};

/***********************************************************
 ******************** Book appointment *********************
 **********************************************************/
export const bookAppointment = (formData) => {
  return async (dispatch) => {
    dispatch(bookAppointmentStart());
    try {
      const token = Cookies.get('ls_user_jwt');
      const response = await axios.post(path.BOOK_APPOINTMENT, formData, {
        headers: { Authorization: token },
      });
      dispatch(bookAppointmentSuccess(response.data));
    } catch (error) {
      dispatch(bookAppointmentFail(error));
    }
  };
};

export const bookAppointmentStart = () => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_START,
  };
};

export const bookAppointmentSuccess = (formData) => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_SUCCESS,
    formData,
  };
};

export const bookAppointmentFail = (error) => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_FAIL,
    error,
  };
};

/***********************************************************
 ******************* Fetch appointments ********************
 **********************************************************/
export const fetchAppointments = () => {
  return async (dispatch) => {
    dispatch(fetchAppointmentsStart());
    try {
      const token = Cookies.get('ls_user_jwt');
      const response = await axios.get(path.FETCH_APPOINTMENT, {
        headers: { Authorization: token },
      });
      dispatch(fetchAppointmentsSuccess(response.data));
    } catch (error) {
      dispatch(fetchAppointmentsFail(error));
    }
  };
};

export const fetchAppointmentsStart = () => {
  return {
    type: actionTypes.FETCH_APPOINTMENTS_START,
  };
};

export const fetchAppointmentsSuccess = (appointmentArray) => {
  return {
    type: actionTypes.FETCH_APPOINTMENTS_SUCCESS,
    appointmentArray,
  };
};

export const fetchAppointmentsFail = (error) => {
  return {
    type: actionTypes.FETCH_APPOINTMENTS_FAIL,
    error,
  };
};

/***********************************************************
 ***************** Fetch appointment by id *****************
 **********************************************************/
export const fetchAppointmentById = (appointmentId) => {
  return async (dispatch) => {
    dispatch(fetchAppointmentByIdStart());
    try {
      const token = Cookies.get('ls_user_jwt');
      const response = await axios.get(
        `${path.FETCH_APPOINTMENT}/${appointmentId}`,
        {
          headers: { Authorization: token },
        }
      );
      dispatch(fetchAppointmentByIdSuccess(response.data));
    } catch (error) {
      dispatch(fetchAppointmentByIdFail(error));
    }
  };
};

export const fetchAppointmentByIdStart = () => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_START,
  };
};

export const fetchAppointmentByIdSuccess = (appointment) => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_SUCCESS,
    appointment,
  };
};

export const fetchAppointmentByIdFail = (error) => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_FAIL,
    error,
  };
};
