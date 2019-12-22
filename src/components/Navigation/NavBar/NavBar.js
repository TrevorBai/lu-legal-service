import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const NavBar = props => (
  <header>
    <nav className="d-flex pr-auto navbar navbar-expand-sm bg-dark navbar-dark">
      <Logo />

      {/* Toggler/collapsibe Button */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <NavigationItems />
      </div>
    </nav>
    <br />
  </header>
)

export default NavBar