import React, { useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userActions from '../../store/actions/index';
import './CloseAccountPage.css';
import Button from '../../components/UI/Button/Button';
import Cookies from 'js-cookie';

const CloseAccountPage = props => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');

  const token = Cookies.get('ls_user_jwt');
  const dispatch = useDispatch();
  const onDeleteUser = () => dispatch(userActions.deleteUser());

  useEffect(() => {
    const onFetchUser = () => dispatch(userActions.fetchUser());
    onFetchUser();
  }, [dispatch]);

  const closeAccountHandler = () => {
    onDeleteUser();
    props.history.push('/goodbye');
  };

  return (
    <div>
      {(!token || !authInfo) && <Redirect to="/signIn" />}
      <SubBanner title={'Close Account'} />
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
            <h2>Close Account</h2>
            <p>
              If you want to close your account permanently, click on the button
              below. <br />
              <br />
              <span className="text-danger">
                <b>Warning: </b>
              </span>
              This operation is irrevocable, after deleting your account, all
              your user data and appointment info will be wiped out.
            </p>
            <div className="row">
              <Button
                className="btn btn-outline-danger"
                clicked={closeAccountHandler}
              >
                Close Account
              </Button>
            </div>
            {/* {loading && <Spinner />} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloseAccountPage;
