import React from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useSelector } from 'react-redux';
import './GoodbyePage.css';
import Spinner from '../../components/UI/Spinner/Spinner';

const GoodbyePage = () => {
  const loading = useSelector((state) => state.user.loading);

  const goodbyeMessage = (
    <div>
      <h2>Sorry to see you go!</h2>
      <p>
        We are glad to see you were part of our family. Sorry to see you go and have a good day!
      </p>
    </div>
  );

  return (
    <div>
      <SubBanner title={'Good Bye'} />
      <section className="Byebye">
        {loading && <Spinner />}
        {goodbyeMessage}
      </section>
    </div>
  );
};

export default GoodbyePage;
