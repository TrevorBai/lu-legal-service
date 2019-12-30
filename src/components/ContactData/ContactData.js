import React, { useState } from 'react'
import axios from 'axios'
import './ContactData.css'
import Input from '../UI/Input/Input'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../UI/Button/Button'

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

  const appointmentHandler = async event => {
    event.preventDefault()

    const compoundDateFormat = date.toString().slice(4, 15) + ' ' + date.toString().slice(-23)
    
    const formData = {
      username: username.value,
      email: email.value,
      task: task.value,
      appointmentTime: appointmentTime.value,
      date: compoundDateFormat,
      message: message.value
    }
    console.log(formData)

    // send data to backend
    try {
      const res = await axios.post(`http://localhost:5000/appointments`, formData)
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
       
  }

  const onChangeUsernameHandler = (event, input) => {
    const updatedFormElement = {...input}
    updatedFormElement.value = event.target.value
    setUsername(updatedFormElement)
  }

  const onChangeEmailHandler = (event, input) => {
    const updatedFormElement = {...input}
    updatedFormElement.value = event.target.value
    setEmail(updatedFormElement)
  }

  const onChangeTaskHandler = (event, input) => {
    const updatedFormElement = {...input}
    updatedFormElement.value = event.target.value
    setTask(updatedFormElement)
  }

  const onChangeAppointmentTimeHandler = (event, input) => {
    const updatedFormElement = {...input}
    updatedFormElement.value = event.target.value
    setAppointmentTime(updatedFormElement)
  }

  const onChangeDateHandler = date => {
    setDate(date)
  }

  const onChangeMessageHandler = (event, input) => {
    const updatedFormElement = {...input}
    updatedFormElement.value = event.target.value
    setMessage(updatedFormElement)
  }

  const form = <form onSubmit={appointmentHandler} className="ContactDataForm">
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
      <Button className="btn btn-primary">Book me in</Button>
    </div>
  </form>

  return (
    <section className="ContactData">
      <h2>Let's sit and talk</h2>
      <p>At Lu legal services, we offer 30 minutes consultation for free. We open 7 days a week from 9 a.m. to 6 p.m. You are welcome to book an appointment through our online booking system below. Looking forward to talk to you soon. Thanks!</p>
      {form}
    </section>
  )
}

export default ContactData