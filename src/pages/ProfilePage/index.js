import React, { useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as userActions from '../../store/actions/index';
import './ProfilePage.css';
import Cookies from 'js-cookie';

const ProfilePage = () => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');

  const token = Cookies.get('ls_user_jwt');
  const dispatch = useDispatch();

  useEffect(() => {
    const onFetchUser = () => dispatch(userActions.fetchUser());
    onFetchUser();
  }, [dispatch]);

  return (
    <div>
      {(!token || !authInfo) && <Redirect to="/signIn" />}
      <SubBanner title={'Profile'} />
      <section className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="ProfileIconBig">
              {authInfo &&
                authInfo.firstName.charAt() + authInfo.lastName.charAt()}
            </div>
            <div className="Username">{authInfo && authInfo.username}</div>
          </div>
          <div className="col-sm-9">
            <h2>Public Profile</h2>
            <p>
              Below is your profile info. If you want to edit it, please click
              on&nbsp;
              <NavLink to="/editProfile">Edit Profile</NavLink>.
            </p>
            <div className='Customrow'>
              <p>First name:</p>
              <p>{authInfo.firstName}</p>
            </div>
            <div className='Customrow'>
              <p>Last name:</p>
              <p>{authInfo.lastName}</p>
            </div>
            <div className='Customrow'>
              <p>Username:</p>
              <p>{authInfo.username}</p>
            </div>
            <div className='Customrow'>
              <p>Email:</p>
              <p>{authInfo.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
