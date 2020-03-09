import React from 'react';

function DatePicker({ placeholder, name, value }) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type="date"
    ></input>
  );
}

export default DatePicker;
