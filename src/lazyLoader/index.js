import { lazy } from 'react';

export const NewAppointment = lazy(() => {
  return import('../components/Appointments/NewAppointment');
});

export const ContactUs = lazy(() => {
  return import('../components/ContactUs/ContactUs');
});

export const SignInPage = lazy(() => {
  return import('../pages/SignInPage');
});

export const RegisterPage = lazy(() => {
  return import('../pages/RegisterPage');
});

export const PasswordReset = lazy(() => {
  return import('../components/PasswordReset/PasswordReset');
});

export const WelcomePage = lazy(() => {
  return import('../pages/WelcomePage');
});