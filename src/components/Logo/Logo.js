import React from 'react'
import LuLogo from '../../assets/images/Lu-logo.png'
import { NavLink } from 'react-router-dom'

const Logo = () => (
  <NavLink className="navbar-brand" to="/">
    <img src={LuLogo} alt="Lu-Logo" style={{ width: 60 }} />
  </NavLink>
)

export default Logo