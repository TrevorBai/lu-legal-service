import React from 'react';
import './Appointment.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import Button from '../UI/Button/Button';
import { datePostProcessor } from '../../shared/utility';
import Modal from '../../components/UI/Modal/Modal';
import AppointmentSummary from '../../components/AppointmentSummary/AppointmentSummary';
import Spinner from '../UI/Spinner/Spinner';

const Appointment = (props) => {
  const { task, appointmentTime, date, message, appointmentId } = props;

  const loading = useSelector((state) => state.appointment.loading);
  const booking = useSelector((state) => state.appointment.booking);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const onOpenModal = () => dispatch(actions.openModal());
  const onCloseModal = () => dispatch(actions.closeModal());

  const modifyAppointmentHandler = () => {
    props.history.push({
      pathname: '/editAppointment',
      state: {
        id: appointmentId,
        task,
        appointmentTime,
        date,
        message,
      },
    });
  };

  const deleteAppointmentHandler = () => {
    // event.preventDefault();
    console.log('Trevor');
    onOpenModal();
  };

  const cancelAnAppointmentHandler = () => {
    onCloseModal();
  };

  const appointmentHandler = () => {};

  let cancelledAppointmentSummary = (
    <AppointmentSummary
      username={user && user.username}
      task={task}
      appointmentTime={appointmentTime}
      date={date}
      message={message}
      appointmentCancelled={cancelAnAppointmentHandler}
      appointmentContinued={appointmentHandler}
    />
  );
  if (loading) {
    cancelledAppointmentSummary = <Spinner />;
  }

  return (
    <div className="Appointment">
      <Modal show={booking} modalClosed={cancelAnAppointmentHandler}>
        {cancelledAppointmentSummary}
      </Modal>
      <div className="LeftContainer col-sm-8">
        <div className="row">
          <p>
            <strong>Categary: </strong>
            {task}
          </p>
          <p>
            <strong>Meet Time: </strong>
            {appointmentTime}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Meet Date: </strong>
            {datePostProcessor(date)}
          </p>
        </div>
        {message && (
          <div className="row">
            <p>
              <strong>Message: </strong>
              {message}
            </p>
          </div>
        )}
      </div>
      <div className="RightContainer col-sm-4">
        <Button className="btn btn-primary" clicked={modifyAppointmentHandler}>
          Reschedule
        </Button>
        <Button
          className="btn btn-outline-danger"
          clicked={deleteAppointmentHandler}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
