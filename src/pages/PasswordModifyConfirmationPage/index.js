import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import './PasswordModifyConfirmationPage.css';

const PasswordModifyConfirmationPage = () => {
  const passwordModifyConfirmationMessage = (
    <div>
      <h2>Password change successful!</h2>
      <p>
        You have been logged out for all your devices, please sign in using new password.
      </p>
    </div>
  );

  return (
    <div>
      <SubBanner title={'Password Changed'} />
      <section className="ContactDataForm">
        {passwordModifyConfirmationMessage}
      </section>
    </div>
  );
};

export default PasswordModifyConfirmationPage;
