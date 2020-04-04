import { lazy } from 'react';

export const NewAppointment = lazy(() => {
  return import('../pages/NewAppointmentPage');
});

export const ContactUs = lazy(() => {
  return import('../pages/ContactUsPage');
});

export const SignInPage = lazy(() => {
  return import('../pages/SignInPage');
});

export const RegisterPage = lazy(() => {
  return import('../pages/RegisterPage');
});

export const PasswordReset = lazy(() => {
  return import('../pages/PasswordResetPage');
});

export const WelcomePage = lazy(() => {
  return import('../pages/WelcomePage');
});

export const LogoutPage = lazy(() => {
  return import('../pages/LogoutPage');
});

export const LogoutAllPage = lazy(() => {
  return import('../pages/LogoutAllPage');
});

export const ProfilePage = lazy(() => {
  return import('../pages/ProfilePage');
});