import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../store/actions/index';
import './ModifyPasswordPage.css';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../../components/UI/Button/Button';
import Cookies from 'js-cookie';
import errorHandler from '../../errorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

const ModifyPasswordPage = (props) => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');
  const error = useSelector((state) => state.user.error);
  const updateSuccess = useSelector((state) => state.user.updateSuccess);

  const [currentPassword, setCurrentPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Your Current Password',
    },
    value: '',
  });

  const [newPassword, setNewPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Your New Password',
    },
    value: '',
  });

  const [retypedNewPassword, setRetypedNewPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Confirm New Password',
    },
    value: '',
  });

  const loading = useSelector((state) => state.user.loading);

  const dispatch = useDispatch();
  const onUpdateUserPassword = (formData) =>
    dispatch(userActions.updateUserPassword(formData));

  useEffect(() => {
    // This is only for checking if the token is still valid
    const onFetchUser = () => dispatch(userActions.fetchUser());
    onFetchUser();
  }, [dispatch]);

  useEffect(() => {
    if (updateSuccess) props.history.push('/passwordModifyConfirmed');
  }, [updateSuccess, props.history]);

  const onChangeCurrentPasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setCurrentPassword(updatedFormElement);
  };

  const onChangeNewPasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setNewPassword(updatedFormElement);
  };

  const onChangeRetypedNewPasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setRetypedNewPassword(updatedFormElement);
  };

  const updatePasswordHandler = () => {
    const updatedPassword = {
      email: authInfo && authInfo.email,
      oldPassword: currentPassword.value,
      newPassword: newPassword.value,
      confirmedNewPassword: retypedNewPassword.value,
    };

    onUpdateUserPassword(updatedPassword);
  };

  const form = (
    <form className="ModifyPasswordForm">
      <Input
        elementType={currentPassword.elementType}
        label="Current Password"
        elementConfig={currentPassword.elementConfig}
        value={currentPassword.value}
        changed={(event) =>
          onChangeCurrentPasswordHandler(event, currentPassword)
        }
        required
      />
      <Input
        elementType={newPassword.elementType}
        label="New Password"
        elementConfig={newPassword.elementConfig}
        value={newPassword.value}
        changed={(event) => onChangeNewPasswordHandler(event, newPassword)}
        required
      />
      <Input
        elementType={retypedNewPassword.elementType}
        label="Confirm New Password"
        elementConfig={retypedNewPassword.elementConfig}
        value={retypedNewPassword.value}
        changed={(event) =>
          onChangeRetypedNewPasswordHandler(event, retypedNewPassword)
        }
        required
      />
    </form>
  );

  return (
    <div>
      <SubBanner title={'Change Password'} />
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
            <h2>Modify Password</h2>
            <p>
              Modify your password here and click on <b>Save</b>.
            </p>
            {error && <div className="Error">{errorHandler(error)}</div>}
            {form}
            <div className="CustomRow">
              <Button
                className="btn btn-primary"
                clicked={updatePasswordHandler}
              >
                Save
              </Button>
              {loading && <Spinner />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModifyPasswordPage;
