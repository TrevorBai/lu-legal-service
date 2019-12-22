import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = props => (
  <ul className="navbar-nav ml-auto">
    <NavigationItem link="/" exact>Home</NavigationItem>
    <NavigationItem link="/appointments">Book an Appointment</NavigationItem>
    <NavigationItem link="/contact">Contact</NavigationItem>
  </ul>
)

export default NavigationItems