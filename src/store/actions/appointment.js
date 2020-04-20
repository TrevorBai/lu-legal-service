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

const bookAppointmentStart = () => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_START,
  };
};

const bookAppointmentSuccess = (formData) => {
  return {
    type: actionTypes.BOOK_APPOINTMENT_SUCCESS,
    formData,
  };
};

const bookAppointmentFail = (error) => {
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

const fetchAppointmentsStart = () => {
  return {
    type: actionTypes.FETCH_APPOINTMENTS_START,
  };
};

const fetchAppointmentsSuccess = (appointmentArray) => {
  return {
    type: actionTypes.FETCH_APPOINTMENTS_SUCCESS,
    appointmentArray,
  };
};

const fetchAppointmentsFail = (error) => {
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

const fetchAppointmentByIdStart = () => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_START,
  };
};

const fetchAppointmentByIdSuccess = (appointment) => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_SUCCESS,
    appointment,
  };
};

const fetchAppointmentByIdFail = (error) => {
  return {
    type: actionTypes.FETCH_APPOINTMENT_BY_ID_FAIL,
    error,
  };
};

/***********************************************************
 ***************** Update appointment by id *****************
 **********************************************************/
export const updateAppointmentById = (appointmentId, formData) => {
  return async (dispatch) => {
    dispatch(updateAppointmentByIdStart());
    try {
      const token = Cookies.get('ls_user_jwt');
      const response = await axios.patch(
        `${path.UPDATE_APPOINTMENT}/${appointmentId}`,
        formData,
        {
          headers: { Authorization: token },
        }
      );
      dispatch(updateAppointmentByIdSuccess(response.data));
    } catch (error) {
      dispatch(updateAppointmentByIdFail(error));
    }
  };
};

const updateAppointmentByIdStart = () => {
  return {
    type: actionTypes.UPDATE_APPOINTMENT_BY_ID_START,
  };
};

const updateAppointmentByIdSuccess = (updatedAppointment) => {
  return {
    type: actionTypes.UPDATE_APPOINTMENT_BY_ID_SUCCESS,
    updatedAppointment,
  };
};

const updateAppointmentByIdFail = (error) => {
  return {
    type: actionTypes.UPDATE_APPOINTMENT_BY_ID_FAIL,
    error,
  };
};

/***********************************************************
 ***************** Delete appointment by id *****************
 **********************************************************/
export const deleteAppointmentById = (appointmentId) => {
  return async (dispatch) => {
    dispatch(deleteAppointmentByIdStart());
    try {
      const token = Cookies.get('ls_user_jwt');
      const response = await axios.delete(
        `${path.DELETE_APPOINTMENT}/${appointmentId}`,
        {
          headers: { Authorization: token },
        }
      );
      dispatch(deleteAppointmentByIdSuccess(response.data));
    } catch (error) {
      dispatch(deleteAppointmentByIdFail(error));
    }
  };
};

const deleteAppointmentByIdStart = () => {
  return {
    type: actionTypes.DELETE_APPOINTMENT_BY_ID_START,
  };
};

const deleteAppointmentByIdSuccess = (appointment) => {
  return {
    type: actionTypes.DELETE_APPOINTMENT_BY_ID_SUCCESS,
    appointment,
  };
};

const deleteAppointmentByIdFail = (error) => {
  return {
    type: actionTypes.DELETE_APPOINTMENT_BY_ID_FAIL,
    error,
  };
};

/***********************************************************
 ********* Fetch booked appointments date and time *********
 **********************************************************/
export const fetchBookedAppointmentsDateAndTime = () => {
  return async dispatch => {
    dispatch(fetchBookedAppointmentsDateAndTimeStart());
    try {
      const response = await axios.get(path.FETCH_BOOKED_APPOINTMENTS_DATE_AND_TIME);
      dispatch(fetchBookedAppointmentsDateAndTimeSuccess(response.data));
    } catch (error) {
      dispatch(fetchBookedAppointmentsDateAndTimeFail(error));
    }
  };
};

const fetchBookedAppointmentsDateAndTimeStart = () => {
  return {
    type: actionTypes.FETCH_BOOKED_APPOINTMENTS_DATE_AND_TIME_START
  };
};

const fetchBookedAppointmentsDateAndTimeSuccess = (bookedAppointmentDateAndTimeArray) => {
  return {
    type: actionTypes.FETCH_BOOKED_APPOINTMENTS_DATE_AND_TIME_SUCCESS,
    bookedAppointmentDateAndTimeArray
  };
};

const fetchBookedAppointmentsDateAndTimeFail = (error) => {
  return {
    type: actionTypes.FETCH_BOOKED_APPOINTMENTS_DATE_AND_TIME_FAIL,
    error
  };
};