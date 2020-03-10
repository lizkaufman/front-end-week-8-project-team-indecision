import React from 'react';

function DatePickerInput({ placeholder, name, value, handleChange }) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type="date"
      onChange={handleChange}
    ></input>
  );
}

export default DatePickerInput;
