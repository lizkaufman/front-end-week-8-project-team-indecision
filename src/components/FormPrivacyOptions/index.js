//TODO: Create tickbox options for planters to show or not show details on map pin for tree
// -- MVP: a yes/no show/no show (boolean)
// -- STRETCH: individual controls for each part of data
// -- Need to not show phone number/email by default! These need to not show by default regardless of this setting.

import React, { useState } from "react";

function FormPrivacyOptions() {
  const [change, setChange] = useState(0);
  function handleOptionChange(changeEvent) {
    setChange(changeEvent.target.value);
  }
  return (
    <div className="radio">
      Click if you wish you Name and Tree information to be posted
      <input
        type="radio"
        name="radio-btn"
        value="option1"
        onChange={handleOptionChange}
      />
      Click if you wish your Name, Tree and Dedication information to be posted
      <input
        type="radio"
        name="radio-btn"
        value="option2"
        onChange={handleOptionChange}
      />
      Click if you wish to remain Anonymous
      <input
        type="radio"
        name="radio-btn"
        value="option2"
        onChange={handleOptionChange}
      />
    </div>
  );
}
// Please test when tying in with the map. Not throwing any errors yet. May do later

export default FormPrivacyOptions;
