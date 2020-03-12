import React from 'react';
import css from '../Form/Form.module.css';

function Button({
  buttonText,
  handleClick,
  buttonSelected,
  addToMapButtonColor,
  myLocButtonColor
}) {
  const formButtonSelectStateClass =
    buttonSelected || addToMapButtonColor || myLocButtonColor
      ? css.buttonIsSelected
      : css.buttonNotSelected;
  return (
    <button
      className={css.formButton + ' ' + formButtonSelectStateClass}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}

export default Button;
// https://coolors.co/d7f9f1-7aa095-40531b-618b4a-afbc88
