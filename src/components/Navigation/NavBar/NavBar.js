import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const NavBar = () => (
  <header>
    <nav className="d-flex pr-auto fixed-top navbar navbar-expand-sm bg-dark navbar-dark">
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
  </header>
)

export default NavBar