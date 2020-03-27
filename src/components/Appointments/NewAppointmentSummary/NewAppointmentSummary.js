import React from 'react'
import './NewAppointmentSummary.css'
import Button from '../../UI/Button/Button'

const NewAppointmentSummary = props => {
  return (
    <section className="NewAppointmentSummary">
      <h3>Your Appointment</h3>
      <p>Dear {props.username}, <br /><br /> Your appointment regarding {props.task} has been made at {props.appointmentTime}  {props.date}.</p>
      {props.message && <p className="sub-p"><br />The additional information: {props.message}</p>}
      <p className="last-p">Confirm the appoinment?</p>
      <div className="row">
        <div className="col-sm-4">
          <Button 
            className="btn btn-secondary d-flex justify-content-center"
            clicked={props.appointmentCancelled}>CANCEL</Button>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Button 
            className="btn btn-primary d-flex justify-content-center"
            clicked={props.appointmentContinued}>CONTINUE</Button>
        </div>
      </div>
    </section>
  )
}

export default NewAppointmentSummary