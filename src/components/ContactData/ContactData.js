import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './ContactData.css'
import Input from '../UI/Input/Input'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import AppointmentSummary from '../Appointments/AppointmentSummary/AppointmentSummary'
import Spinner from '../UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler'
import * as appointmentActions from '../../store/actions/index'
import { updateObject } from '../../shared/utility'

const ContactData = props => {

  const [username, setUsername] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Your Name'
    },
    value: ''
  })

  const [email, setEmail] = useState({
    elementType: 'input',
    elementConfig: {
      type: 'email',
      placeholder: 'Your Email'
    },
    value: ''
  })

  const [task, setTask] = useState({
    elementType: 'select',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select one category'
        },
        {
          value: 'traffic tickets',
          displayValue: 'Traffic tickets'
        },
        {
          value: 'landlord and tenant',
          displayValue: 'Landlord and tenant'
        },
        {
          value: 'small claims',
          displayValue: 'Small claims'
        },
        {
          value: 'commission oaths',
          displayValue: 'Commission oaths'
        }
      ]
    },
    value: ''
  })

  const [appointmentTime, setAppointmentTime] = useState({
    elementType: 'select',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select a specific time'
        },
        {
          value: '9:00 AM',
          displayValue: '9:00 AM'
        },
        {
          value: '9:30 AM',
          displayValue: '9:30 AM'
        },
        {
          value: '10:00 AM',
          displayValue: '10:00 AM'
        },
        {
          value: '10:30 AM',
          displayValue: '10:30 AM'
        },
        {
          value: '11:00 AM',
          displayValue: '11:00 AM'
        },
        {
          value: '11:30 AM',
          displayValue: '11:30 AM'
        },
        {
          value: '1:00 PM',
          displayValue: '1:00 PM'
        },
        {
          value: '1:30 PM',
          displayValue: '1:30 PM'
        },
        {
          value: '2:00 PM',
          displayValue: '2:00 PM'
        },
        {
          value: '2:30 PM',
          displayValue: '2:30 PM'
        },
        {
          value: '3:00 PM',
          displayValue: '3:00 PM'
        },
        {
          value: '3:30 PM',
          displayValue: '3:30 PM'
        },
        {
          value: '4:00 PM',
          displayValue: '4:00 PM'
        },
        {
          value: '4:30 PM',
          displayValue: '4:30 PM'
        },
        {
          value: '5:00 PM',
          displayValue: '5:00 PM'
        }
      ]
    },
    value: ''
  })

  const [date, setDate] = useState(new Date())

  const [message, setMessage] = useState({
    elementType: 'textarea',
    elementConfig: {
      type: '',
      placeholder: 'Your Message'
    },
    value: ''
  })

  const [bookable, setBookable] = useState(false)  // local UI state

  const loading = useSelector(state => state.loading)
  const booking = useSelector(state => state.booking)
  const booked = useSelector(state => state.booked)

  const dispatch = useDispatch()
  const onBookAppointment = (formData) => dispatch(appointmentActions.bookAppointment(formData))
  const onOpenModal = () => dispatch(appointmentActions.openModal())
  const onCloseModal = () => dispatch(appointmentActions.closeModal())

  const updateBookableHandler = useCallback(() => {
    if (username.value 
      && email.value
      && task.value
      && appointmentTime.value
      ) {
      setBookable(true)
    }
  }, [username.value,
    email.value,
    task.value,
    appointmentTime.value
  ])

  useEffect(() => {
    updateBookableHandler()
  }, [updateBookableHandler])

  const compoundDateFormat = date.toString().slice(4, 15) + ' ' + date.toString().slice(-23)

  const appointmentHandler = async event => {
    event.preventDefault()
    const formData = {
      username: username.value,
      email: email.value,
      task: task.value,
      appointmentTime: appointmentTime.value,
      date: compoundDateFormat,
      message: message.value
    }

    onBookAppointment(formData)
  }

  const onChangeUsernameHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    })
    setUsername(updatedFormElement)
    updateBookableHandler()
  }

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    })
    setEmail(updatedFormElement)
    updateBookableHandler()
  }

  const onChangeTaskHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    })
    setTask(updatedFormElement)
    updateBookableHandler()
  }

  const onChangeAppointmentTimeHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    })
    setAppointmentTime(updatedFormElement)
    updateBookableHandler()
  }

  const onChangeDateHandler = date => {
    setDate(date)
  }

  const onChangeMessageHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value
    })
    setMessage(updatedFormElement)
  }

  const bookAnAppointmentHandler = (event) => {
    event.preventDefault()
    onOpenModal()
  }

  const cancelAnAppointmentHandler = () => {
    onCloseModal()
  }

  const form = <form className="ContactDataForm">
    <Input 
      elementType={username.elementType} 
      label="Name" 
      elementConfig={username.elementConfig}
      value={username.value}
      changed={event => onChangeUsernameHandler(event, username)}
      required 
    />
    <Input 
      elementType={email.elementType} 
      label="Email"
      elementConfig={email.elementConfig}
      value={email.value}
      changed={event => onChangeEmailHandler(event, email)}
      required 
    />
    <Input 
      elementType={task.elementType} 
      label="Category"
      elementConfig={task.elementConfig}
      value={task.value}
      changed={event => onChangeTaskHandler(event, task)}
      required
    />
    <Input 
      elementType={appointmentTime.elementType} 
      label="Meeting time"
      elementConfig={appointmentTime.elementConfig}
      value={appointmentTime.value}
      changed={event => onChangeAppointmentTimeHandler(event, appointmentTime)}
      required
    />
    <div className="row">
      <div className="col-sm-4">
        <label>Meeting date</label>
      </div>
      <div className="col-sm-8">
        <DatePicker
          selected={date}
          onChange={onChangeDateHandler}
        />
      </div>
    </div>
    <Input
      elementType={message.elementType}
      label="Any comments"
      elementConfig={message.elementConfig}
      value={message.value}
      changed={event => onChangeMessageHandler(event, message)}
    />
    <div className="row">
      <Button 
        className="btn btn-primary"
        clicked={bookAnAppointmentHandler}
        disabled={!bookable}>Book me in</Button>
    </div>
  </form>

  let appointmentSummary = <AppointmentSummary
    username={username.value}
    task={task.value}
    appointmentTime={appointmentTime.value}
    date={compoundDateFormat}
    message={message.value}
    appointmentCancelled={cancelAnAppointmentHandler}
    appointmentContinued={appointmentHandler}
  />
  if (loading) {
    appointmentSummary = <Spinner />
  }

  const bookedRedirect = booked && <Redirect to="/" />

  return (
    <section className="ContactData">
      {bookedRedirect}
      <Modal 
        show={booking}
        modalClosed={cancelAnAppointmentHandler}>
        {appointmentSummary}
      </Modal>
      <h2>Let's sit and talk</h2>
      <p>At Lu legal services, we offer 30 minutes consultation for free. We open 7 days a week from 9 a.m. to 6 p.m. You are welcome to book an appointment through our online booking system below. Looking forward to talk to you soon. Thanks!</p>
      {form}
    </section>
  )
}

export default withErrorHandler(ContactData, axios)