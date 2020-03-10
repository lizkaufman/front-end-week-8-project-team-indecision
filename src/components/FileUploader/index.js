import React from 'react';

function FileUploader(name, value, handleChange) {
  return <input type="file" value={value} handleChange={handleChange}></input>;
}

export default FileUploader;
