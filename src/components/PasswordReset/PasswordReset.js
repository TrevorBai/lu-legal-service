import React, { useState, useEffect } from 'react';
import SubBanner from '../Banner/SubBanner/SubBanner';
import './PasswordReset.css';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../UI/Button/Button';

const PasswordReset = () => {
  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email'
    },
    value: ''
  });

  const [sendable, setSendable] = useState(false);

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

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setEmail(updatedFormElement);
  };

  const sendPasswordResetHandler = event => {
    event.preventDefault();
    const emailData = {
      email: email.value
    };

    // Send to backend to Auth
    console.log('emailData :', emailData);
  };

  return (
    <section>
      <SubBanner title={'Password Reset'} />
      <div className="PasswordReset">
        <h2>Welcome back!</h2>
        <p>Enter your email and we send you a password reset link.</p>
      </div>
      <div className="ContactDataForm">
        <Input
          elementType={email.elementType}
          label="Email"
          elementConfig={email.elementConfig}
          value={email.value}
          changed={event => onChangeEmailHandler(event, email)}
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
