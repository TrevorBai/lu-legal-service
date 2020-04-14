import React, { useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch, useSelector } from 'react-redux';
import './AppointmentDetailAdminPage.css';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { datePostProcessor } from '../../shared/utility';
import Button from '../../components/UI/Button/Button';

const AppointmentDetailAdminPage = (props) => {
  const appointmentInfo = {
    id: props.location.state.id,
    task: props.location.state.task,
    appointmentTime: props.location.state.appointmentTime,
    date: props.location.state.date,
    message: props.location.state.message,
    owner: props.location.state.owner,
  };
  const loading = useSelector((state) => state.appointment.loading);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const onFetchUserById = () =>
      dispatch(actions.fetchUserById(appointmentInfo.owner));
    onFetchUserById(appointmentInfo.owner);
  }, [dispatch, appointmentInfo.owner]);

  const goBackHandler = () => {
    props.history.goBack();
  };

  const appointmentDetails = (
    <div>
      <h2>The appointment</h2>
      <p>A full detailed appointment info in below</p>
      <div className="AppointmentDetails">
        <div className="row">
          <p>
            <strong>Categary: </strong>
            {appointmentInfo.task}
          </p>
          <p>
            <strong>Meet Time: </strong>
            {appointmentInfo.appointmentTime}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Meet Date: </strong>
            {datePostProcessor(appointmentInfo.date)}
          </p>
        </div>
        {appointmentInfo.message && (
          <div className="row">
            <p>
              <strong>Message: </strong>
              {appointmentInfo.message}
            </p>
          </div>
        )}
        <hr />
        <div className="row">
          <p>
            <strong>Booker Info:</strong>
          </p>
        </div>
        <div className="row">
          <p>
            <strong>FirstName: </strong>
            {user && user.firstName}
          </p>
          <p>
            <strong>LastName: </strong>
            {user && user.lastName}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Username: </strong>
            {user && user.username}
          </p>
        </div>
        <div className="row">
          <p>
            <strong>Email: </strong>
            {user && user.email}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <SubBanner title={'Appointment Details'} />
      <section className="Container">
        {loading && <Spinner />}
        {appointmentDetails}
        <div className="CustomRow">
          <Button className="btn btn-primary" clicked={goBackHandler}>
            Go Back
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AppointmentDetailAdminPage;
