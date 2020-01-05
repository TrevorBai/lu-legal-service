import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
  appointments: [],
  loading: false,
  booking: false,
  booked: false
}

const openModal = (state) => {
  return updateObject(state, { booking: true })
}

const closeModal = (state) => {
  return updateObject(state, { booking: false })
}

const bookAppointmentStart = (state) => {
  return updateObject(state, { loading: true })
}

const bookAppointmentSuccess = (state, action) => {
  const newAppointment = { ...action.formData }
  return updateObject(state, {
    appointments: state.appointments.concat(newAppointment),
    loading: false,
    booking: false,
    booked: true
  }) 
}

const bookAppointmentFail = (state) => {
  return updateObject(state, {
    loading: false,
    booking: false
  })
}

const bookAppointmentInit = (state) => {
  return updateObject(state, { booked: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL: return openModal(state)
    case actionTypes.CLOSE_MODAL: return closeModal(state)
    case actionTypes.BOOK_APPOINTMENT_START: return bookAppointmentStart(state)
    case actionTypes.BOOK_APPOINTMENT_SUCCESS: return bookAppointmentSuccess(state, action)  
    case actionTypes.BOOK_APPOINTMENT_FAIL: return bookAppointmentFail(state)
    case actionTypes.BOOK_APPOINTMENT_INIT: return bookAppointmentInit(state)
    default: return state
  }
}

export default reducer