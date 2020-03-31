import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import LogInData from '../../components/LogInData/LogInData';

const SignIn = () => {
  return (
    <div>
      <SubBanner title={'Sign in'} />
      <LogInData />
    </div>
  );
};

export default SignIn;
