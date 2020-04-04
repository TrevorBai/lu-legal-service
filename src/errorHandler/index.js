import React from 'react';

const errorHandler = (error) => {
  if (typeof error === 'object') {
    const key = Object.keys(error)[0];
    let errorMessage = error[key];
    console.log(errorMessage);
    return <b>{errorMessage}</b>;
  }

  if (error.includes('shorter than the minimum allowed length (7)')) {
    error = 'Error: Minimum length of password is 7.';
  }

  if (error.includes("Password cannot contain 'password'")) {
    error = "Error: Password cannot contain 'password'.";
  }

  if (error.includes('duplicate key error')) {
    error =
      'Error: The entered email address has been used, please enter another one.';
  }

  if (error.includes('Confirmed password is not equal to')) {
    error = 'Error: Confirmed password is not equal to the password typed in.';
  }

  return <b>{error}</b>;
};

export default errorHandler;

