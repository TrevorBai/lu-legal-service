import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { useSelector } from 'react-redux';
import './NavigationItems.css';
import CollapsableNavigationItem from './CollapsableNavigationItem/CollapsableNavigationItem';
import Cookies from 'js-cookie';

const NavigationItems = () => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');
  // Utilize loading state change to re-render the navbar
  const loading = useSelector((state) => state.user.loading);

  return (
    <ul className="navbar-nav ml-auto d-flex">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      {(authInfo && !loading) ? (
        <CollapsableNavigationItem
          headerName="Appointments"
          headerLink="/appointments"
          dropdownItems={[
            {
              name: 'New Appointment',
              link: '/appointments',
            },
            {
              name: 'Booked Appointments',
              link: '/bookedAppointments',
            },
          ]}
        />
      ) : (
        <NavigationItem link="/appointments" exact>
          New Appointment
        </NavigationItem>
      )}
      <NavigationItem link="/contact">Contact</NavigationItem>
      {authInfo ? (
        <CollapsableNavigationItem
          isProfile="true"
          toLeft="true"
          headerName={
            authInfo && authInfo.firstName.charAt() + authInfo.lastName.charAt()
          }
          headerLink="/editProfile"
          dropdownItems={[
            {
              name: 'Public Profile',
              link: '/profile',
            },
            {
              name: 'Edit Profile',
              link: '/editProfile',
            },
            {
              name: 'Change Password',
              link: '/passwordModify',
            },
            {
              name: 'Log Out',
              link: '/logout',
            },
            {
              name: 'Log Out ALL',
              link: '/logoutAll',
            },
            {
              name: 'Close Account',
              link: '/closeAccount',
            },
          ]}
        />
      ) : (
        <CollapsableNavigationItem
          headerName="Sign In"
          headerLink="/signIn"
          dropdownItems={[
            {
              name: 'Register',
              link: '/register',
            },
          ]}
        />
      )}
    </ul>
  );
};

export default NavigationItems;
