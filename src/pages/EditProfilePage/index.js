import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userActions from '../../store/actions/index';
import './EditProfilePage.css';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';
import Button from '../../components/UI/Button/Button';
import Cookies from 'js-cookie';

const ProfilePage = (props) => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');

  // const user = useSelector((state) => state.user.user);

  const [firstName, setFirstName] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your First Name',
    },
    value: (authInfo && authInfo.firstName) || '',
  });

  const [lastName, setLastName] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Last Name',
    },
    value: (authInfo && authInfo.lastName) || '',
  });

  const [username, setUsername] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Username',
    },
    value: (authInfo && authInfo.username) || '',
  });

  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email',
    },
    value: (authInfo && authInfo.email) || '',
  });

  // const loading = useSelector((state) => state.user.loading);

  const token = Cookies.get('ls_user_jwt');

  const dispatch = useDispatch();
  const onUpdateUserProflie = (formData) =>
    dispatch(userActions.updateUserProfile(formData));

  useEffect(() => {
    // This is only for checking if the token is still valid
    const onFetchUser = () => dispatch(userActions.fetchUser());
    onFetchUser();

    // This is a tricky part. The goal is after fetching the user data, populate
    // the cooresponding input fields. Using Redux is not successful for me. Reasons are
    // 1) Dispatching the fetching operation to redux causes we lost direct control
    // on the fullfilled promise. Redux populates the global user state after a while (async).
    // 2) We have to listen to the global user state changes and call setState applying
    // to the local input fields state in this component which causes infinite loop.
    // 3) So we have to clear up dependancy list to only let fetch user once. However,
    // the dispatch function is synchronised, so we can not get updated global user state right away.

    // There are two solutions to this problem. 1- store user data into local storage or
    // cookie, so we can get it synchronizely. 2- dispatch the async fetch function in
    // useEffect function, setState right after fetching the data. This way, we fully ignore
    // the global user state and redux, just await the async done and setState. It seems like
    // solution 2 is a normalized solution. I will take solution 1 since I already have certain user
    // data stored in the browser.

    // Solution 2
    // const fetchData = async () => {
    //   const response = await axios.get('http://localhost:5000/api/users/me', {
    //     headers: { Authorization: token },
    //   });

    //   const updatedFormElement = {
    //     elementType: 'input',
    //     elementConfig: {
    //       type: 'text',
    //       placeholder: 'Your First Name',
    //     },
    //     value: response.data.firstName
    //   };

    //   setFirstName(updatedFormElement);

    // };
    // fetchData();
  }, [dispatch]);

  const onChangeFirstNameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setFirstName(updatedFormElement);
  };

  const onChangeLastNameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setLastName(updatedFormElement);
  };

  const onChangeUsernameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setUsername(updatedFormElement);
  };

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setEmail(updatedFormElement);
  };

  const updateUserDataHandler = () => {
    const updatedUserProfile = {
      firstName: firstName.value,
      lastName: lastName.value,
      username: username.value,
      email: email.value,
    };

    onUpdateUserProflie(updatedUserProfile);
    props.history.push('/welcome');
    window.location.reload();
  };

  const form = (
    <form className="SignUpDataForm">
      <Input
        elementType={firstName.elementType}
        label="First name"
        elementConfig={firstName.elementConfig}
        value={firstName.value}
        changed={(event) => onChangeFirstNameHandler(event, firstName)}
        required
      />
      <Input
        elementType={lastName.elementType}
        label="Last name"
        elementConfig={lastName.elementConfig}
        value={lastName.value}
        changed={(event) => onChangeLastNameHandler(event, lastName)}
        required
      />
      <Input
        elementType={username.elementType}
        label="Username"
        elementConfig={username.elementConfig}
        value={username.value}
        changed={(event) => onChangeUsernameHandler(event, username)}
        required
      />
      <Input
        elementType={email.elementType}
        label="Email"
        elementConfig={email.elementConfig}
        value={email.value}
        changed={(event) => onChangeEmailHandler(event, email)}
        required
      />
    </form>
  );

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
            <h2>Edit Profile</h2>
            <p>
              Edit your profile here and click on <b>Save</b>.
            </p>
            {form}
            <div className="CustomRow">
              <Button
                className="btn btn-primary"
                clicked={updateUserDataHandler}
              >
                Save
              </Button>
              {/* {loading && <Spinner />} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
