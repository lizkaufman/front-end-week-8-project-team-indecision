import React from 'react';

function TextInputField({ placeholder, name, value }) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type="text"
    ></input>
  );
}

export default TextInputField;
