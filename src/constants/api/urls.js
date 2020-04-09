export const BACKEND_URL_DEV = 'http://localhost:5000/';
export const BACKEND_URL_PROD = 'https://';

const API_URL = (BACKEND_URL_DEV || BACKEND_URL_PROD) + 'api/';

/**
 * Auth
 */
export const REGISTER_USER = API_URL + 'users';
export const FETCH_USER = API_URL + 'users/me';
export const LOGOUT_USER = API_URL + 'users/logout';
export const LOGOUT_USER_ALL = API_URL + 'users/logoutAll';
export const LOGIN_USER = API_URL + 'users/login';
export const UPDATE_USER = API_URL + 'users/me';
export const DELETE_USER = API_URL + 'users/me';

/**
 * Appointment
 */
export const BOOK_APPOINTMENT = API_URL + 'appointments';
export const FETCH_APPOINTMENT = API_URL + 'appointments';