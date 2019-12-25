import React from 'react'
import { NavLink } from 'react-router-dom'
import './SocialMediaNav.css'

const SocialMediaNav = props => (
  <li>
    <NavLink exact={props.exact} to={props.link}>
      <ion-icon name={props.socialMediaLogo}></ion-icon>
    </NavLink>
  </li>
)

export default SocialMediaNav