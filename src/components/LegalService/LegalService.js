import React, { Fragment, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Banner from '../Banner/Banner'
import Businesses from '../Businesses/Businesses'
import Testimonials from '../Testimonials/Testimonials'
import Roster from '../Roster/Roster'
import * as appointmentActions from '../../store/actions/index'

const LegalService = props => {

  const dispatch = useDispatch()
  const onBookAppointmentInit = useCallback(() => dispatch(appointmentActions.bookAppointmentInit()), [dispatch])

  useEffect(() => {
    onBookAppointmentInit()
  }, [onBookAppointmentInit])

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