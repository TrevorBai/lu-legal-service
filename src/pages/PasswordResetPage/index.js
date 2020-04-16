import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import './PasswordResetPage.css';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../../components/UI/Button/Button';
import errorHandler from '../../errorHandler';

const PasswordReset = () => {
  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email',
    },
    value: '',
  });

  const [sendable, setSendable] = useState(false);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const onPasswordReset = (email) =>
    dispatch(userActions.passwordReset(email));

  useEffect(() => {
    const updateSendableHandler = () => {
      if (email.value) {
        setSendable(true);
      } else {
        setSendable(false);
      }
    };
    updateSendableHandler();
  }, [email.value]);

  // Clean up error state at redux when unmounting
  useEffect(() => {
    const onResetUserError = () => dispatch(userActions.resetUserError());
    return () => {
      onResetUserError();
    };
  }, [dispatch]);

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setEmail(updatedFormElement);
  };

  const sendPasswordResetHandler = (event) => {
    event.preventDefault();
    const emailData = {
      email: email.value,
    };
    onPasswordReset(emailData);
  };
  return (
    <section>
      <SubBanner title={'Password Reset'} />
      <div className="PasswordReset">
        <h2>Welcome back!</h2>
        <p>Enter your email and we send you a password reset link.</p>
      </div>
      {error && <div className="Error">{errorHandler(error)}</div>}
      <div className="ContactDataForm">
        <Input
          elementType={email.elementType}
          label="Email"
          elementConfig={email.elementConfig}
          value={email.value}
          changed={(event) => onChangeEmailHandler(event, email)}
          required
        />
        <div className="row">
          <Button
            className="btn btn-primary"
            clicked={sendPasswordResetHandler}
            disabled={!sendable}
          >
            Send request
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
