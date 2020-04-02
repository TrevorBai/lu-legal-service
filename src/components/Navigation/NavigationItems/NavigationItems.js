import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
import CollapsableNavigationItem from './CollapsableNavigationItem/CollapsableNavigationItem';

const NavigationItems = () => {
  const token = localStorage.getItem('token');
  const stringifiedUser = localStorage.getItem('name');
  const user = JSON.parse(stringifiedUser);

  return (
    <ul className="navbar-nav ml-auto d-flex">
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      {token ? (
        <CollapsableNavigationItem
          headerName="Appointments"
          headerLink="/appointments"
          dropdownItems={[
            {
              name: 'New Appointment',
              link: '/appointments'
            },
            {
              name: 'Booked Appointments',
              link: '/appointmentsBooked'
            }
          ]}
        />
      ) : (
        <NavigationItem link="/appointments" exact>
          New Appointment
        </NavigationItem>
      )}
      <NavigationItem link="/contact">Contact</NavigationItem>
      {token ? (
        <CollapsableNavigationItem
          isProfile="true"
          toLeft="true"
          headerName={user && user.firstName.charAt() + user.lastName.charAt()}
          headerLink="/profile"
          dropdownItems={[
            {
              name: 'Log Out',
              link: '/logout'
            },
            {
              name: 'Log Out ALL',
              link: '/logoutAll'
            }
          ]}
        />
      ) : (
        <CollapsableNavigationItem
          headerName="Sign In"
          headerLink="/signIn"
          dropdownItems={[
            {
              name: 'Register',
              link: '/register'
            }
          ]}
        />
      )}
    </ul>
  );
};

export default NavigationItems;
