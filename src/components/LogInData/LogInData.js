import React, { useState } from 'react';
import './LogInData.css';
import { NavLink } from 'react-router-dom';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';

const LogInData = () => {
  const [username, setUsername] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Username'
    },
    value: ''
  });

  const [password, setPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Password'
    },
    value: ''
  });

  // const [rememberMe, setRememberMe] = useState({
  //   elementType: 'input',
  //   elementConfig: {
  //     type: 'checkbox'
  //   },
  //   value: false
  // });

  const [rememberMe, setRememberMe] = useState(false);

  const onChangeUsernameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setUsername(updatedFormElement);
    // updateBookableHandler()
  };

  const onChangePasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setPassword(updatedFormElement);
    // updateBookableHandler()
  };

  const onChangeRememberMeHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setRememberMe(updatedFormElement);
    // updateBookableHandler()
  };

  const form = (
    <form className="LogInDataForm">
      <Input
        elementType={username.elementType}
        label="Username"
        elementConfig={username.elementConfig}
        value={username.value}
        changed={event => onChangeUsernameHandler(event, username)}
        required
      />
      <Input
        elementType={password.elementType}
        label="Password"
        elementConfig={password.elementConfig}
        value={password.value}
        changed={event => onChangePasswordHandler(event, password)}
        required
      />
      {/* <Input
        elementType={rememberMe.elementType}
        checkboxLabel="Remember Me"
        elementConfig={rememberMe.elementConfig}
        value={rememberMe.value}
        changed={event => onChangeRememberMeHandler(event, rememberMe)}
        required
      /> */}
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
            onChange={event => onChangeRememberMeHandler(event, rememberMe)}
          />
          <small>Remember Me</small>
        </div>
        <div className="col-sm-6 ForgetPassword">
          <NavLink to="/passwordReset">
            <small>Forgot Password</small>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default LogInData;
