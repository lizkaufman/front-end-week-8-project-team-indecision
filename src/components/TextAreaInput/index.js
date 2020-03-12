import React from 'react';

function TextAreaInput({ placeholder, name, value, handleChange }) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      rows="3"
    ></textarea>
  );
}

export default TextAreaInput;
