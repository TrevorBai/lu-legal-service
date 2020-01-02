import React, { Fragment } from 'react'
import SubBanner from '../Banner/SubBanner/SubBanner'
import MapData from '../MapData/MapData'

const ContactUs = props => {
  return (
    <Fragment>
      <SubBanner title={'Contact us'}/>
      <MapData />
    </Fragment>
  )
}

export default ContactUs