import React, { Fragment } from 'react'
import Banner from '../Banner/Banner'
import Businesses from '../Businesses/Businesses'
import Testimonials from '../Testimonials/Testimonials'
import Roster from '../Roster/Roster'

const LegalService = props => {

  return (
    <Fragment>
      <Banner />
      <Businesses />
      <Testimonials />
      <Roster />
    </Fragment>
  )
}

export default LegalService