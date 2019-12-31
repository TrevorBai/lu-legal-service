import React from 'react'
import './AppointmentSummary.css'

const AppointmentSummary = props => {
  return (
    <section className="AppointmentSummary">
      <h3>Your Appointment</h3>
      <p>Dear {props.username}, <br /><br /> Your appointment regarding {props.task} has been made at {props.appointmentTime}  {props.date}.</p>
      {props.message && <p className="sub-p"><br />The additional information: {props.message}</p>}
      <p className="last-p">Confirm the appoinment?</p>
    </section>
  )
}

export default AppointmentSummary