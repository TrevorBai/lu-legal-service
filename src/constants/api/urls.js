export const BACKEND_URL_DEV = 'http://localhost:5000/';
export const BACKEND_URL_PROD = 'https://';

const API_URL = (BACKEND_URL_DEV || BACKEND_URL_PROD) + 'api/';

/**
 * Auth
 */
export const REGISTER_USER = API_URL + 'users';
export const FETCH_USER = API_URL + 'users/me';
export const LOGOUT_USER = API_URL + 'users/logout';
export const LOGIN_USER = API_URL + 'users/login';
