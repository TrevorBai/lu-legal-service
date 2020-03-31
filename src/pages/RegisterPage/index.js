import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import SignUpData from '../../components/SignUpData/SignUpData';

const RegisterPage = () => {
  return (
    <div>
      <SubBanner title={'Register'} />
      <SignUpData />
    </div>
  );
};

export default RegisterPage;