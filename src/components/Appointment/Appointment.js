import React from 'react';
import './Appointment.css';
import Button from '../UI/Button/Button';
import { datePostProcessor } from '../../shared/utility';

const Appointment = (props) => {
  const {
    task,
    appointmentTime,
    date,
    message,
    appointmentId,
    isAdmin,
    owner
  } = props;

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
    props.history.push({
      pathname: '/cancelAppointment',
      state: {
        id: appointmentId,
        task,
        appointmentTime,
        date,
        message,
      },
    });
  };

  const fetchOwnerHandler = () => {
    props.history.push({
      pathname: '/appointmentDetailAdmin',
      state: {
        id: appointmentId,
        task,
        appointmentTime,
        date,
        message,
        owner
      },
    });
  };

  return (
    <div className="Appointment">
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
        {isAdmin ? (
          <Button
            className="btn btn-primary"
            clicked={fetchOwnerHandler}
          >
            Details
          </Button>
        ) : (
          <div>
            <Button
              className="btn btn-primary"
              clicked={modifyAppointmentHandler}
            >
              Reschedule
            </Button>
            <Button
              className="btn btn-outline-danger"
              clicked={deleteAppointmentHandler}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
