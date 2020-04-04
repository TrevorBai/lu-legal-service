import React, { Fragment } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import ContactData from '../../components/ContactData/ContactData';

const NewAppointmentPage = (props) => {
  return (
    <Fragment>
      <SubBanner title={'Need advice? let us help you!'} />
      <ContactData {...props} />
    </Fragment>
  );
};

export default NewAppointmentPage;
