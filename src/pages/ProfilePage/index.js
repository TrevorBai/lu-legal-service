import React, { useEffect, useCallback } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userActions from '../../store/actions/index';

const ProfilePage = () => {
  // const loading = useSelector((state) => state.user.loading);
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem('token');

  const dispatch = useDispatch();
  const onFetchUser = useCallback(() => dispatch(userActions.fetchUser()), [
    dispatch,
  ]);

  useEffect(() => {
    onFetchUser();
  }, [onFetchUser]);

  return (
    <div>
      {!user && <Redirect to="/signIn" />}
      <SubBanner title={'Profile'} />
    </div>
  );
};

export default ProfilePage;
