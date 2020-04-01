import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
import CollapsableNavigationItem from './CollapsableNavigationItem/CollapsableNavigationItem';
import { useDispatch, useSelector } from 'react-redux';

const NavigationItems = () => {
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.user.user);

  return (
    <ul className="navbar-nav ml-auto">
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
        <NavigationItem link="/profile">
          <span className="ProfileIcon">
            {user && user.firstName.charAt() + user.lastName.charAt()}
          </span>
        </NavigationItem>
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
