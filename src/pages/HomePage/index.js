import React, { Fragment, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Businesses from '../../components/Businesses/Businesses';
import Testimonials from '../../components/Testimonials/Testimonials';
import Roster from '../../components/Roster/Roster';
import * as appointmentActions from '../../store/actions';

const LegalService = () => {
  const dispatch = useDispatch();
  const onBookAppointmentInit = useCallback(
    () => dispatch(appointmentActions.bookAppointmentInit()),
    [dispatch]
  );

  useEffect(() => {
    onBookAppointmentInit();
  }, [onBookAppointmentInit]);

  return (
    <Fragment>
      <Banner />
      <Businesses />
      <Testimonials />
      <Roster />
    </Fragment>
  );
};

export default LegalService;
