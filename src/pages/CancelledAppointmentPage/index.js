import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useSelector, useDispatch } from 'react-redux';
import { datePostProcessor } from '../../shared/utility';
import * as appointmentActions from '../../store/actions/index';
import './CancelledAppointmentPage.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

const CancelledAppointmentPage = (props) => {
  const cancelledAppointmentInfo = {
    id: props.location.state.id,
    task: props.location.state.task,
    appointmentTime: props.location.state.appointmentTime,
    date: props.location.state.date,
    message: props.location.state.message,
  };

  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const onDeleteAppointmentById = (appointmentId) => dispatch(appointmentActions.deleteAppointmentById(appointmentId));

  const cancelledAppointmentSummary = (
    <div>
      <h2>One last step</h2>
      <p>
        You are about to cancel your appointment regarding{' '}
        <b>{cancelledAppointmentInfo.task}</b> which has been made at
        <b>
          {' '}
          {cancelledAppointmentInfo.appointmentTime}{' '}
          {datePostProcessor(cancelledAppointmentInfo.date)}
        </b>
        .
        {cancelledAppointmentInfo.message && (
          <span>
            <br />
            The additional information: {cancelledAppointmentInfo.message}
          </span>
        )}
      </p>
      <p>
        <span className="text-danger">
          <b>Warning: </b>
        </span>
        This operation is irrevocable, after cancelling your appointment, you
        may not be able to book the same time slot in future.
      </p>
      <p className="last-p">Confirm the cancellation?</p>
    </div>
  );

  const cancelAppointmentHandler = (appointmentId) => {
    onDeleteAppointmentById(appointmentId);
    props.history.push('/bookedAppointments');
  };

  return (
    <div>
      <SubBanner title={'Cancel Appointment'} />
      <section className="CancelledAppointment">
        {loading && <Spinner />}
        {cancelledAppointmentSummary}
        <div className="row">
          <Button
            className="btn btn-outline-danger"
            clicked={() => cancelAppointmentHandler(cancelledAppointmentInfo.id)}
          >
            Cancel Appointment
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CancelledAppointmentPage;
