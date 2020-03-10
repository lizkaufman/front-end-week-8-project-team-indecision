import React from 'react';

function TextInputField({ placeholder, name, value, handleChange }) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type="text"
      onChange={handleChange}
    ></input>
  );
}

export default TextInputField;
