import React, { Fragment } from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'

const Layout = props => {
  return (
    <Fragment>
      <NavBar />
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout