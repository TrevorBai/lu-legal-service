import React, { Fragment } from 'react';
import './Input.css';

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          value={props.value}
          onChange={props.changed}
          required={props.required}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          required={props.required}
          minlength={props.minlength}
        />
      );
  }

  return (
    <Fragment>
      {props.label ? (
        <div className="row">
          <Fragment>
            <div className="col-sm-4">
              <label>{props.label}</label>
            </div>
            <div className="col-sm-8">{inputElement}</div>
          </Fragment>
        </div>
      ) : (
        <p className="CheckBox">
          {inputElement}
          <small>{props.checkboxLabel}</small>
        </p>
      )}
    </Fragment>
  );
};

export default Input;
