import React, { useState, useEffect } from 'react';
import './LogInData.css';
import { NavLink } from 'react-router-dom';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../UI/Button/Button';

const LogInData = () => {

  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email'
    },
    value: ''
  });

  const [password, setPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Your Password'
    },
    value: ''
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [signInable, setSignInable] = useState(false);

  useEffect(() => {
    const updateSignInableHandler = () => {
      if (email.value && password.value) {
        setSignInable(true);
      } else {
        setSignInable(false);
      }
    };
    updateSignInableHandler();
  }, [email.value, password.value]);

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setEmail(updatedFormElement);
  };

  const onChangePasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setPassword(updatedFormElement);
  };

  const onChangeRememberMeHandler = () => {
    setRememberMe(prevRememberMe => !prevRememberMe);
  };

  const signInHandler = event => {
    event.preventDefault();
    const signInData = {
      email: email.value,
      password: password.value
    };

    // Send to backend to Auth
    console.log('signInData :', signInData);
  };

  const form = (
    <form className="LogInDataForm">
      <Input
        elementType={email.elementType}
        label="Email"
        elementConfig={email.elementConfig}
        value={email.value}
        changed={event => onChangeEmailHandler(event, email)}
        required
      />
      <Input
        elementType={password.elementType}
        label="Password"
        elementConfig={password.elementConfig}
        value={password.value}
        changed={event => onChangePasswordHandler(event, password)}
        minLength="7"
        required
      />
    </form>
  );

  return (
    <section className="ContactDataForm">
      <h2>Welcome back!</h2>
      <p>
        Please login to your account. If you haven't register an account yet,
        please click on&nbsp;
        <NavLink to="/register">Register</NavLink>.
      </p>
      {form}
      <div className="CustomRow">
        <div className="col-sm-6 CustomRow-Inner">
          <input
            type="checkbox"
            value={rememberMe}
            onChange={onChangeRememberMeHandler}
          />
          <small>Remember Me</small>
        </div>
        <div className="col-sm-6 ForgetPassword">
          <NavLink to="/passwordReset">
            <small>Forgot Password</small>
          </NavLink>
        </div>
      </div>
      <div className="row">
        <Button
          className="btn btn-primary"
          clicked={signInHandler}
          disabled={!signInable}
        >
          Sign in
        </Button>
      </div>
    </section>
  );
};

export default LogInData;
