import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useSelector } from 'react-redux';
// import './GoodbyePage.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const CancelledAppointmentPage = () => {
  const loading = useSelector((state) => state.user.loading);

  const cancelledAppointmentSummary = (
    <div>
      <h2>Sorry to see you go!</h2>
      <p>
        We are glad to see you were part of our family. Sorry to see you go and
        have a good day!
      </p>
    </div>
  );

  return (
    <div>
      <SubBanner title={'Cancel Appointment'} />
      <section className="AppointmentCancelled">
        {loading && <Spinner />}
        {cancelledAppointmentSummary}
      </section>
    </div>
  );
};

export default CancelledAppointmentPage;
