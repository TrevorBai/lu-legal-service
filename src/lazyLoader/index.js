import { lazy } from 'react';

export const NewAppointmentPage = lazy(() => {
  return import('../pages/NewAppointmentPage');
});

export const ContactUsPage = lazy(() => {
  return import('../pages/ContactUsPage');
});

export const SignInPage = lazy(() => {
  return import('../pages/SignInPage');
});

export const RegisterPage = lazy(() => {
  return import('../pages/RegisterPage');
});

export const PasswordResetPage = lazy(() => {
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

export const EditProfilePage = lazy(() => {
  return import('../pages/EditProfilePage');
});

export const ProfilePage = lazy(() => {
  return import('../pages/ProfilePage');
});

export const CloseAccountPage = lazy(() => {
  return import('../pages/CloseAccountPage');
});

export const GoodbyePage = lazy(() => {
  return import('../pages/GoodbyePage');
});

export const AppointmentConfirmationPage = lazy(() => {
  return import('../pages/AppointmentConfirmationPage');
});

export const BookedAppointmentsPage = lazy(() => {
  return import('../pages/BookedAppointmentsPage');
});

export const EditAppointmentPage = lazy(() => {
  return import('../pages/EditAppointmentPage');
});

export const CancelledAppointmentPage = lazy(() => {
  return import('../pages/CancelledAppointmentPage');
});

export const AppointmentDetailAdminPage = lazy(() => {
  return import('../pages/AppointmentDetailAdminPage');
});