import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import './ContactData.css';
import Input from '../UI/Input/Input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import NewAppointmentSummary from '../NewAppointmentSummary/NewAppointmentSummary';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../store/actions';
import { updateObject } from '../../shared/utility';

const ContactData = () => {
  const [task, setTask] = useState({
    elementType: 'select',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select one category',
        },
        {
          value: 'traffic tickets',
          displayValue: 'Traffic tickets',
        },
        {
          value: 'landlord and tenant',
          displayValue: 'Landlord and tenant',
        },
        {
          value: 'small claims',
          displayValue: 'Small claims',
        },
        {
          value: 'commission oaths',
          displayValue: 'Commission oaths',
        },
      ],
    },
    value: '',
  });

  const [appointmentTime, setAppointmentTime] = useState({
    elementType: 'select',
    elementConfig: {
      options: [
        {
          value: '',
          displayValue: 'Please select a specific time',
        },
        {
          value: '9:00 AM',
          displayValue: '9:00 AM',
        },
        {
          value: '9:30 AM',
          displayValue: '9:30 AM',
        },
        {
          value: '10:00 AM',
          displayValue: '10:00 AM',
        },
        {
          value: '10:30 AM',
          displayValue: '10:30 AM',
        },
        {
          value: '11:00 AM',
          displayValue: '11:00 AM',
        },
        {
          value: '11:30 AM',
          displayValue: '11:30 AM',
        },
        {
          value: '1:00 PM',
          displayValue: '1:00 PM',
        },
        {
          value: '1:30 PM',
          displayValue: '1:30 PM',
        },
        {
          value: '2:00 PM',
          displayValue: '2:00 PM',
        },
        {
          value: '2:30 PM',
          displayValue: '2:30 PM',
        },
        {
          value: '3:00 PM',
          displayValue: '3:00 PM',
        },
        {
          value: '3:30 PM',
          displayValue: '3:30 PM',
        },
        {
          value: '4:00 PM',
          displayValue: '4:00 PM',
        },
        {
          value: '4:30 PM',
          displayValue: '4:30 PM',
        },
        {
          value: '5:00 PM',
          displayValue: '5:00 PM',
        },
      ],
    },
    value: '',
  });

  const [date, setDate] = useState(new Date());

  const [message, setMessage] = useState({
    elementType: 'textarea',
    elementConfig: {
      type: '',
      placeholder: 'Your Message',
    },
    value: '',
  });

  const [bookable, setBookable] = useState(false); // local UI state

  const loading = useSelector((state) => state.appointment.loading);
  const booking = useSelector((state) => state.appointment.booking);
  const booked = useSelector((state) => state.appointment.booked);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const onBookAppointment = (formData) =>
    dispatch(actions.bookAppointment(formData));
  const onOpenModal = () => dispatch(actions.openModal());
  const onCloseModal = () => dispatch(actions.closeModal());

  useEffect(() => {
    const onFetchUser = () => dispatch(actions.fetchUser());
    onFetchUser();
  }, [dispatch]);

  useEffect(() => {
    const updateBookableHandler = () => {
      if (task.value && appointmentTime.value) {
        setBookable(true);
      } else {
        setBookable(false);
      }
    };
    updateBookableHandler();
  }, [task.value, appointmentTime.value]);

  const compoundDateFormat =
    date.toString().slice(4, 15) + ' ' + date.toString().slice(-23);

  const appointmentHandler = async (event) => {
    event.preventDefault();
    const formData = {
      task: task.value,
      appointmentTime: appointmentTime.value,
      date: compoundDateFormat,
      message: message.value,
    };

    onBookAppointment(formData);
  };

  const onChangeTaskHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setTask(updatedFormElement);
  };

  const onChangeAppointmentTimeHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setAppointmentTime(updatedFormElement);
  };

  const onChangeDateHandler = (date) => {
    setDate(date);
  };

  const onChangeMessageHandler = (event, input) => {
    const updatedFormElement = updateObject(input, {
      value: event.target.value,
    });
    setMessage(updatedFormElement);
  };

  const bookAnAppointmentHandler = (event) => {
    event.preventDefault();
    onOpenModal();
  };

  const cancelAnAppointmentHandler = () => {
    onCloseModal();
  };

  const form = (
    <form className="ContactDataForm">
      <Input
        elementType={task.elementType}
        label="Category"
        elementConfig={task.elementConfig}
        value={task.value}
        changed={(event) => onChangeTaskHandler(event, task)}
        required
      />
      <Input
        elementType={appointmentTime.elementType}
        label="Meeting time"
        elementConfig={appointmentTime.elementConfig}
        value={appointmentTime.value}
        changed={(event) =>
          onChangeAppointmentTimeHandler(event, appointmentTime)
        }
        required
      />
      <div className="row">
        <div className="col-sm-4">
          <label>Meeting date</label>
        </div>
        <div className="col-sm-8">
          <DatePicker selected={date} onChange={onChangeDateHandler} />
        </div>
      </div>
      <Input
        elementType={message.elementType}
        label="Any comments"
        elementConfig={message.elementConfig}
        value={message.value}
        changed={(event) => onChangeMessageHandler(event, message)}
      />
      <div className="row">
        <Button
          className="btn btn-primary"
          clicked={bookAnAppointmentHandler}
          disabled={!bookable}
        >
          Book me in
        </Button>
      </div>
    </form>
  );

  let newAppointmentSummary = (
    <NewAppointmentSummary
      username={user && user.username}
      task={task.value}
      appointmentTime={appointmentTime.value}
      date={compoundDateFormat}
      message={message.value}
      appointmentCancelled={cancelAnAppointmentHandler}
      appointmentContinued={appointmentHandler}
    />
  );
  if (loading) {
    newAppointmentSummary = <Spinner />;
  }

  const bookedRedirect = booked && <Redirect to="/appointmentConfirmed" />;

  return (
    <section className="ContactData">
      {bookedRedirect}
      <Modal show={booking} modalClosed={cancelAnAppointmentHandler}>
        {newAppointmentSummary}
      </Modal>
      <h2>Let's sit and talk</h2>
      {user ? (
        <p>
          At Lu legal services, we offer 30 minutes consultation for free. We
          open 7 days a week from 9 a.m. to 6 p.m. You can book an appointment
          through our online booking system below. Looking forward to talk to
          you soon. Thanks!
        </p>
      ) : (
        <p>
          At Lu legal services, we offer 30 minutes consultation for free. We
          open 7 days a week from 9 a.m. to 6 p.m. You can book an appointment
          through our online booking system. However, you need register as our
          memeber for free throught&nbsp;
          <NavLink to="/register">Register</NavLink> in order to proceed.
          Looking forward to talk to you soon. Thanks!
          <br />
          <br />
          If you want directly calling us to book an appointment, pleace call{' '}
          <b>519-278-3224</b>.
        </p>
      )}
      {user && form}
    </section>
  );
};

export default ContactData;
