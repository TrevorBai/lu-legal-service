import React, { Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './hoc/Layout/Layout';
import * as lazyLoader from './lazyLoader';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route
        path="/appointments"
        render={(props) => <lazyLoader.NewAppointmentPage {...props} />}
      />
      <Route
        path="/contact"
        render={(props) => <lazyLoader.ContactUsPage {...props} />}
      />
      <Route
        path="/signIn"
        render={(props) => <lazyLoader.SignInPage {...props} />}
      />
      <Route
        path="/passwordReset"
        render={(props) => <lazyLoader.PasswordResetPage {...props} />}
      />
      <Route
        path="/register"
        render={(props) => <lazyLoader.RegisterPage {...props} />}
      />
      <Route
        path="/welcome"
        render={(props) => <lazyLoader.WelcomePage {...props} />}
      />
      <Route
        path="/logout"
        render={(props) => <lazyLoader.LogoutPage {...props} />}
      />
      <Route
        path="/logoutAll"
        render={(props) => <lazyLoader.LogoutAllPage {...props} />}
      />
      <Route
        path="/editProfile"
        render={(props) => <lazyLoader.EditProfilePage {...props} />}
      />
      <Route
        path="/profile"
        render={(props) => <lazyLoader.ProfilePage {...props} />}
      />
      <Route
        path="/closeAccount"
        render={(props) => <lazyLoader.CloseAccountPage {...props} />}
      />
      <Route
        path="/goodbye"
        render={(props) => <lazyLoader.GoodbyePage {...props} />}
      />
      <Route
        path="/appointmentConfirmed"
        render={(props) => (
          <lazyLoader.AppointmentConfirmationPage {...props} />
        )}
      />
      <Route
        path="/bookedAppointments"
        render={(props) => <lazyLoader.BookedAppointmentsPage {...props} />}
      />
      <Route
        path="/editAppointment"
        render={(props) => <lazyLoader.EditAppointmentPage {...props} />}
      />
      <Route
        path="/cancelAppointment"
        render={(props) => <lazyLoader.CancelledAppointmentPage {...props} />}
      />
      <Route
        path="/appointmentDetailAdmin"
        render={(props) => <lazyLoader.AppointmentDetailAdminPage {...props} />}
      />
      <Route
        path="/passwordModify"
        render={(props) => <lazyLoader.ModifyPasswordPage {...props} />}
      />
      <Route
        path="/passwordModifyConfirmed"
        render={(props) => <lazyLoader.PasswordModifyConfirmationPage {...props} />}
      />
    </Switch>
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(App);
