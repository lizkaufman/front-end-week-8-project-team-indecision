import React from 'react';

function SuccessMessage({ showSuccess }) {
  return showSuccess ? (
    <p>Form submitted successfully! Don't forget to tweet with #NeedsATree.</p>
  ) : null;
}

export default SuccessMessage;
