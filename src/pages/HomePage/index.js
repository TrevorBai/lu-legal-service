import React, { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import Businesses from '../../components/Businesses/Businesses';
import Testimonials from '../../components/Testimonials/Testimonials';
import Roster from '../../components/Roster/Roster';

const LegalService = (props) => {
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
