import React, { useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './AppointmentConfirmationPage.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as appointmentActions from '../../store/actions';
import { datePostProcessor } from '../../shared/utility';

const AppointmentConfirmationPage = () => {
  const loading = useSelector((state) => state.user.loading);
  const newAppointment = useSelector(
    (state) => state.appointment.newAppointment
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const onFetchAppointments = () =>
      dispatch(appointmentActions.fetchAppointments());
    onFetchAppointments();
  }, [dispatch]);

  const appointmentConfirmedMessage = (
    <div>
      <h2>Congratulations!</h2>
      <p>
        We are glad to see you have booked an appointment with us. <br />
        <br />
        Your appointment at&nbsp;
        <b>
          {newAppointment && newAppointment.appointmentTime},&nbsp;
          {newAppointment && datePostProcessor(newAppointment.date)}&nbsp;
        </b>
        regarding <b>{newAppointment && newAppointment.task}</b> has been
        booked. We look forward to seeing you. You can view all your
        appointments at&nbsp;
        <NavLink to="/bookedAppointments">Booked Appointments</NavLink> in
        future. Thank you.
      </p>
    </div>
  );

  return (
    <div>
      {!newAppointment && <Redirect to="/bookedAppointments" />}
      <SubBanner title={'Appointment Confirmed'} />
      <section className="AppointmentConfirmed">
        {loading && <Spinner />}
        {appointmentConfirmedMessage}
      </section>
    </div>
  );
};

export default AppointmentConfirmationPage;
