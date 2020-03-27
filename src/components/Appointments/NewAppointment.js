import React, { Fragment } from 'react'
import SubBanner from '../Banner/SubBanner/SubBanner'
import ContactData from '../ContactData/ContactData'

const NewAppointment = props => {
  return (
    <Fragment>
      <SubBanner title={'Need advice? let us help you!'}/>
      <ContactData {...props} />
    </Fragment>
  )
}

export default NewAppointment