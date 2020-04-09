import React, { useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch, useSelector } from 'react-redux';
import './EditAppointmentPage.css';
import * as appointmentActions from '../../store/actions/index';

const EditAppointmentPage = (props) => {
  const appointmentId = props.history.location.state.id;

  const fetchedAppointment = useSelector(
    (state) => state.appointment.newAppointment
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const onFetchAppointmentById = (appointmentId) =>
      dispatch(appointmentActions.fetchAppointmentById(appointmentId));
    onFetchAppointmentById(appointmentId);
  }, [dispatch, appointmentId]);

  return (
    <div>
      <SubBanner title={'Edit Appointment'} />
      <div className="EditAppointment">
        <h2>Reschedule</h2>
        <p>
          You have <b>ONE</b> chance to reschedule your appointment. Edit
          appointment info below and click on <strong>Save</strong>.
        </p>
      </div>
    </div>
  );
};

export default EditAppointmentPage;
