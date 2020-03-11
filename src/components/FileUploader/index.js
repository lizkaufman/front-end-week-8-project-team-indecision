import React, { useCallback } from 'react';
//import { useDropzone } from 'react-dropzone';

function FileUploader({ name, handleFile }) {
  return <input type="file" name={name} onChange={handleFile} />;
}

export default FileUploader;

/*
*************NOTE FROM LIZ: I was trying to use a React component called Dropzone (https://react-dropzone.js.org/). I couldn't get it to work though, so for MVP purposes, I've swapped it back to the basic HTML file input shindig. It doesn't have drag and drop, but at least it doesn't eat the file never to be seen again, which is what the React one is doing! Where I got to is below if you want to take a crack at it:

function FileUploader({ handleFile }) {
  const onDrop = useCallback(
    acceptedFiles => {
      handleFile(acceptedFiles);
    },
    [handleFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          Drag and drop your image file here, or click to select your image
          file.
        </p>
      )}
    </div>
  );
}
*/
