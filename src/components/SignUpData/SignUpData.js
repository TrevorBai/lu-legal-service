import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignUpData.css';
import { NavLink, Redirect } from 'react-router-dom';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../UI/Button/Button';
import * as userActions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import errorHandler from '../../errorHandler';

const SignUpData = () => {
  const [firstName, setFirstName] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your First Name'
    },
    value: ''
  });

  const [lastName, setLastName] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Last Name'
    },
    value: ''
  });

  const [username, setUsername] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Username'
    },
    value: ''
  });

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

  const [confirmedPassword, setConfirmedPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Confirm Password'
    },
    value: ''
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [signUpable, setSignUpable] = useState(false);

  const token = localStorage.getItem('token');
  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);

  const dispatch = useDispatch();
  const onRegisterUser = formData => dispatch(userActions.registerUser(formData));

  useEffect(() => {
    const updateSignUpableHandler = () => {
      if (firstName.value && lastName.value && username.value && email.value && password.value && confirmedPassword.value && agreeTerms) {
        setSignUpable(true);
      } else {
        setSignUpable(false);
      }
    };
    updateSignUpableHandler();
  }, [firstName.value, lastName.value, username.value, email.value, password.value, confirmedPassword.value, agreeTerms]);

  const onChangeFirstNameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setFirstName(updatedFormElement);
  };

  const onChangeLastNameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setLastName(updatedFormElement);
  };

  const onChangeUsernameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setUsername(updatedFormElement);
  };

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

  const onChangeConfirmedPasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    });
    setConfirmedPassword(updatedFormElement);
  };

  const onChangeAgreeTermsHandler = () => {
    setAgreeTerms(prevAgreeTerms => !prevAgreeTerms);
  };

  const signUpHandler = event => {
    event.preventDefault();
    const signUpData = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value,
      confirmedPassword: confirmedPassword.value
    };

    onRegisterUser(signUpData);
  };

  const form = <form className="SignUpDataForm">
    <Input
      elementType={firstName.elementType}
      label="First name"
      elementConfig={firstName.elementConfig}
      value={firstName.value}
      changed={event => onChangeFirstNameHandler(event, firstName)}
      required
    />
    <Input
      elementType={lastName.elementType}
      label="Last name"
      elementConfig={lastName.elementConfig}
      value={lastName.value}
      changed={event => onChangeLastNameHandler(event, lastName)}
      required
    />
    <Input
      elementType={username.elementType}
      label="Username"
      elementConfig={username.elementConfig}
      value={username.value}
      changed={event => onChangeUsernameHandler(event, username)}
      required
    />
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
      minLength="6"
      required
    />
    <Input
      elementType={confirmedPassword.elementType}
      label="Confirm Password"
      elementConfig={confirmedPassword.elementConfig}
      value={confirmedPassword.value}
      changed={event => onChangeConfirmedPasswordHandler(event, confirmedPassword)}
      minLength="6"
      required
    />
  </form>

  return (
    <section className="ContactDataForm">
      {token && <Redirect to="/welcome" />}
      <h2>Create Your Account</h2>
      <p>
        Please complete to create your account. If you already have an account,
        please click on&nbsp;
        <NavLink to="/signIn">Sign in</NavLink>.
      </p>
      {error && <div className="Error">{errorHandler(error)}</div>}
      {form}
      <div className="Terms">
        <input
          type="checkbox"
          value={agreeTerms}
          onChange={onChangeAgreeTermsHandler}
        />
        <small>I agree with terms and conditions</small>
      </div>
      <div className="row">
        <Button
          className="btn btn-primary"
          clicked={signUpHandler}
          disabled={!signUpable}
        >
          Sign up
        </Button>
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default SignUpData;
