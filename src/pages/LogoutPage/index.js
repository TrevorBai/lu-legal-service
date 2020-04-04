import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { NavLink } from 'react-router-dom';
import './LogoutPage.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as userActions from '../../store/actions/index';

const LogoutPage = () => {
  const loading = useSelector(state => state.user.loading);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const onLogoutUser = useCallback(() => dispatch(userActions.logoutUser()), [dispatch]);

  useEffect(() => {
    onLogoutUser();
  }, [onLogoutUser]);

  const logoutMessage = (
    <div>
      <h2>You have successfully logged out!</h2>
      <p>
        Thank you for using our services and we hope to see you again. Please
        note, your other logged in accounts at other devices such as your tablet
        or phone remains logged in. If you wish to log all your accounts out,
        please click on&nbsp;
        <NavLink to="/logoutAll">Log Out ALL</NavLink>.
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

export default LogoutPage;
