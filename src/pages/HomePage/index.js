import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import * as userActions from '../../store/actions/index';
import Banner from '../../components/Banner/Banner';
import Businesses from '../../components/Businesses/Businesses';
import Testimonials from '../../components/Testimonials/Testimonials';
import Roster from '../../components/Roster/Roster';

const LegalService = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // This is only for checking if the token is still valid
    const onFetchUser = () =>
      dispatch(userActions.fetchUser());
    onFetchUser();
  }, [dispatch]);

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
