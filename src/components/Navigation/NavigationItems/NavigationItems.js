import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
import CollapsableNavigationItem from './CollapsableNavigationItem/CollapsableNavigationItem';

const NavigationItems = props => (
  <ul className="navbar-nav ml-auto">
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
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
    <NavigationItem link="/contact">Contact</NavigationItem>
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
  </ul>
);

export default NavigationItems;
