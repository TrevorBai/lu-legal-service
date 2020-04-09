import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  newAppointment: null,
  appointments: [],
  loading: false,
  booking: false,
  booked: false
};

const openModal = state => {
  return updateObject(state, { booking: true });
};

const closeModal = state => {
  return updateObject(state, { booking: false });
};

const bookAppointmentStart = state => {
  return updateObject(state, { loading: true, booking: true });
};

const bookAppointmentSuccess = (state, action) => {
  return updateObject(state, {
    newAppointment: action.formData,
    loading: false,
    booking: false,
    booked: true,
  });
};

const bookAppointmentFail = state => {
  return updateObject(state, {
    loading: false,
    booking: false
  });
};

const fetchAppointmentsStart = (state) => {
  return updateObject(state, { loading: true, booked: false });
};

const fetchAppointmentsSuccess = (state, action) => {
  return updateObject(state, {
    appointments: action.appointmentArray,
    loading: false,
  });
};

const fetchAppointmentsFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const fetchAppointmentByIdStart = (state) => {
  return updateObject(state, { loading: true });
};

const fetchAppointmentByIdSuccess = (state, action) => {
  return updateObject(state, {
    newAppointment: action.appointment,
    loading: false,
  });
};

const fetchAppointmentByIdFail = (state) => {
  return updateObject(state, {
    loading: false,
  });
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return openModal(state);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state);
    case actionTypes.BOOK_APPOINTMENT_START:
      return bookAppointmentStart(state);
    case actionTypes.BOOK_APPOINTMENT_SUCCESS:
      return bookAppointmentSuccess(state, action);
    case actionTypes.BOOK_APPOINTMENT_FAIL:
      return bookAppointmentFail(state);
    case actionTypes.FETCH_APPOINTMENTS_START:
      return fetchAppointmentsStart(state);
    case actionTypes.FETCH_APPOINTMENTS_SUCCESS:
      return fetchAppointmentsSuccess(state, action);
    case actionTypes.FETCH_APPOINTMENTS_FAIL:
      return fetchAppointmentsFail(state);
    case actionTypes.FETCH_APPOINTMENT_BY_ID_START:
      return fetchAppointmentByIdStart(state);
    case actionTypes.FETCH_APPOINTMENT_BY_ID_SUCCESS:
      return fetchAppointmentByIdSuccess(state, action);
    case actionTypes.FETCH_APPOINTMENT_BY_ID_FAIL:
      return fetchAppointmentByIdFail(state);
    default:
      return state;
  }
};

export default appointmentReducer;
