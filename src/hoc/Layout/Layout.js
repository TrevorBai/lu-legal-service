import React, { Fragment } from 'react'
import NavBar from '../../components/Navigation/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const Layout = props => {
  return (
    <Fragment>
      <NavBar />
      <main>
        {props.children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout