import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/Banner/SubBanner/SubBanner';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import './EditAppointmentPage.css';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';
import DatePicker from 'react-datepicker';
import Button from '../../components/UI/Button/Button';

const EditAppointmentPage = (props) => {
  const appointmentInfo = {
    id: props.location.state.id,
    task: props.location.state.task,
    appointmentTime: props.location.state.appointmentTime,
    date: props.location.state.date,
    message: props.location.state.message,
  };

  const fetchedAppointment = useSelector(
    (state) => state.appointment.newAppointment,
    shallowEqual
  );

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
    value: appointmentInfo.task,
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
    value: appointmentInfo.appointmentTime,
  });

  const [date, setDate] = useState(new Date(appointmentInfo.date));

  const [message, setMessage] = useState({
    elementType: 'textarea',
    elementConfig: {
      type: '',
      placeholder: 'Your Message',
    },
    value: appointmentInfo.message,
  });

  const dispatch = useDispatch();
  const onUpdateAppointmentById = (appointmentId, formData) =>
    dispatch(actions.updateAppointmentById(appointmentId, formData));

  useEffect(() => {
    const onFetchUser = () => dispatch(actions.fetchUser());
    onFetchUser();
  }, [dispatch]);

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

  const editAnAppointmentHandler = (event) => {
    event.preventDefault();
    const updatedAppointment = {
      task: task.value,
      appointmentTime: appointmentTime.value,
      date,
      message: message.value,
    };
    onUpdateAppointmentById(appointmentInfo.id, updatedAppointment);
    if (fetchedAppointment) props.history.push('/appointmentConfirmed');
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
        <Button className="btn btn-primary" clicked={editAnAppointmentHandler}>
          Save
        </Button>
      </div>
    </form>
  );

  return (
    <div>
      <SubBanner title={'Edit Appointment'} />
      <div className="EditAppointment">
        <h2>Reschedule</h2>
        <p>
          You have <b>ONE</b> chance to reschedule your appointment. Edit
          appointment info below and click on <strong>Save</strong>.
        </p>
      </div>
      {form}
    </div>
  );
};

export default EditAppointmentPage;
