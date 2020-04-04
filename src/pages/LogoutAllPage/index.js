import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import './LogoutAllPage.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as userActions from '../../store/actions/index';

const LogoutAllPage = () => {
  const loading = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const onLogoutUserAll = useCallback(() => dispatch(userActions.logoutUserAll()), [
    dispatch,
  ]);

  useEffect(() => {
    onLogoutUserAll();
  }, [onLogoutUserAll]);

  const logoutMessage = (
    <div>
      <h2>All your accounts have successfully logged out!</h2>
      <p>
        Thank you for using our services and we hope to see you again.
      </p>
    </div>
  );

  return (
    <div>
      <SubBanner title={'Log Out'} />
      <section className="ContactDataForm">
        {loading && <Spinner />}
        {!user && logoutMessage}
      </section>
    </div>
  );
};

export default LogoutAllPage;
