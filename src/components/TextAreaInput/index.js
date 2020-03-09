import React from 'react';

function TextAreaInput({ placeholder, name, value }) {
  return (
    <textarea placeholder={placeholder} name={name} value={value}></textarea>
  );
}

export default TextAreaInput;
