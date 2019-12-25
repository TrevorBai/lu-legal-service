import React from 'react'
import { NavLink } from 'react-router-dom'
import './FooterNav.css'

const FooterNav = props => (
  <li>
    <NavLink exact={props.exact} to={props.link}>
      {props.children}
    </NavLink>
  </li>
)

export default FooterNav