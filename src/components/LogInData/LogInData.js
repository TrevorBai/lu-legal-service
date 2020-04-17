import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LogInData.css';
import { NavLink, Redirect } from 'react-router-dom';
import Input from '../UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../UI/Button/Button';
import * as userActions from '../../store/actions/index';
import Spinner from '../UI/Spinner/Spinner';
import errorHandler from '../../errorHandler';
import Cookies from 'js-cookie';

const LogInData = () => {
  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email',
    },
    value: '',
  });

  const [password, setPassword] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'password',
      placeholder: 'Your Password',
    },
    value: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [signInable, setSignInable] = useState(false);

  const token = Cookies.get('ls_user_jwt');
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const onLoginUser = (formData) => dispatch(userActions.loginUser(formData));

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

  const onChangePasswordHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setPassword(updatedFormElement);
  };

  const onChangeRememberMeHandler = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const signInHandler = (event) => {
    event.preventDefault();
    const signInData = {
      email: email.value,
      password: password.value,
      expiration: rememberMe
    };

    onLoginUser(signInData);
  };

  const form = (
    <form className="LogInDataForm">
      <Input
        elementType={email.elementType}
        label="Email"
        elementConfig={email.elementConfig}
        value={email.value}
        changed={(event) => onChangeEmailHandler(event, email)}
        required
      />
      <Input
        elementType={password.elementType}
        label="Password"
        elementConfig={password.elementConfig}
        value={password.value}
        changed={(event) => onChangePasswordHandler(event, password)}
        minLength="7"
        required
      />
    </form>
  );

  return (
    <section className="ContactDataForm">
      {token && <Redirect to="/welcome" />}
      <h2>Welcome back!</h2>
      <p>
        Please login to your account. If you haven't register an account yet,
        please click on&nbsp;
        <NavLink to="/register">Register</NavLink>.
      </p>
      {error && <div className="Error">{errorHandler(error)}</div>}
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
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default LogInData;
