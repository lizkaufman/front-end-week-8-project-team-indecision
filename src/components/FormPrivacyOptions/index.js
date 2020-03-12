//TODO: Create tickbox options for planters to show or not show details on map pin for tree
// -- MVP: a yes/no show/no show (boolean)
// -- STRETCH: individual controls for each part of data
// -- Need to not show phone number/email by default! These need to not show by default regardless of this setting.

import React, { useState } from 'react';
import css from '../Form/Form.module.css';

function FormPrivacyOptions() {
  const [change, setChange] = useState(0);
  function handleOptionChange(changeEvent) {
    setChange(changeEvent.target.value);
  }
  return (
    <div className={css.radio}>
      <label>Privacy options:</label>
      <br />
      <input
        type="radio"
        name="radio-btn"
        value="option1"
        onChange={handleOptionChange}
      />
      Display your name and tree details with your tree
      <br />
      <input
        type="radio"
        name="radio-btn"
        value="option2"
        onChange={handleOptionChange}
      />
      Display your name, tree details, and dedication message with your tree
      <br />
      <input
        type="radio"
        name="radio-btn"
        value="option2"
        onChange={handleOptionChange}
      />
      Register your tree anonymously
    </div>
  );
}
// Please test when tying in with the map. Not throwing any errors yet. May do later

export default FormPrivacyOptions;
