import React from 'react';

function TextAreaInput({ placeholder, name, value, handleChange }) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
    ></textarea>
  );
}

export default TextAreaInput;
