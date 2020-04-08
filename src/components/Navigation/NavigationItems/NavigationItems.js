import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { useSelector } from 'react-redux';
import './NavigationItems.css';
import CollapsableNavigationItem from './CollapsableNavigationItem/CollapsableNavigationItem';
import Cookies from 'js-cookie';

const NavigationItems = () => {
  const authInfo = Cookies.getJSON('ls_last_auth_information');
  const user = useSelector((state) => state.user.user);

  return (
    <ul className="navbar-nav ml-auto d-flex">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      {user ? (
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
              link: '/appointmentsBooked',
            },
          ]}
        />
      ) : (
        <NavigationItem link="/appointments" exact>
          New Appointment
        </NavigationItem>
      )}
      <NavigationItem link="/contact">Contact</NavigationItem>
      {user ? (
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
              name: 'Log Out',
              link: '/logout',
            },
            {
              name: 'Log Out ALL',
              link: '/logoutAll',
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
