import React, { useState } from 'react';
import TextInputField from '../TextInputField/index';
import DropdownInputField from '../DropdownInputField/index';
import DatePickerInput from '../DatePickerInput/index';
import TextAreaInput from '../TextAreaInput/index';
import FileUploader from '../FileUploader/index';
import SuccessMessage from '../SuccessMessage/index';

//------------PLAN-----------------------------

//TODO: Wrap FormInputField components in a <form></form> tag and have onSubmit event tied to <button type="submit"></button> at end ✅

//TODO: Add input field components for each form field listed below check ✅
/*
**Form fields - both:**
-First name (optional)
-Last name (optional)
-Organisation (optional)
-Contact email 
-Contact phone number 
-Picture

**Form fields - specific for planters:**
-Tree species -> Dropdown list!!
-Date planted 

**Form fields - specific for requesters:**
-Comment (for details about the requested area)
*/

//TODO: Need conditional rendering - if person selects planter, only display planter fields, and for requesters, only display requester fields:
//--Make state to toggle between form types ✅
//--Make function to set that state ✅
//--Make buttons to toggle
//--Attach function to buttons
//--Set input components to conditionally render where necessary
//--Celebrate!

//TODO: Need a place for the user to upload a photo! Use <input type='file' /> in the FileUploader component. ✅

//TODO: Correctly label in line with accessibility guidelines for screen readers ✅

//TODO: Need states to manage each field ✅

//TODO: Need handleChange function that changes state for each field based on onChange event ✅

//TODO: Need handleSubmit function to do the post request when submit is pressed (onSubmit event), taking in the values from the input fields' states ✅

//TODO: Connect the handleSubmit's fetch to the database using the URL

//TODO: Show a success message once the form is submitted ✅

//--------------CODE------------------------------

function Form() {
  //State to manage form content:
  const [form, setForm] = useState({
    fName: '',
    lName: '',
    org: '',
    email: '',
    phone: '',
    species: '',
    datePlanted: new Date(),
    comment: '',
    treePic: './sampletree.jpg'
  });

  //State that manages whether the form renders the questions specific to planters or requesters:
  const [requester, setRequester] = useState(false);

  //State to show success message after form submits:
  const [showSuccess, setShowSuccess] = useState(false);

  //Function to handle switching between requester and planter (default for now is planter):
  function toggleFormType() {
    setRequester(!requester);
  }

  //Function to handle form entry:
  function handleChange(event) {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setForm({
      fName: inputName === 'fName' ? inputValue : form.fName,
      lName: inputName === 'lName' ? inputValue : form.lName,
      org: inputName === 'org' ? inputValue : form.org,
      email: inputName === 'email' ? inputValue : form.email,
      phone: inputName === 'phone' ? inputValue : form.phone,
      species: inputName === 'species' ? inputValue : form.species,
      datePlanted: inputName === 'datePlanted' ? inputValue : form.datePlanted,
      comment: inputName === 'comment' ? inputValue : form.comment,
      treePic: inputName === 'treePic' ? inputValue : form.treePic
    });
    console.log(inputName);
    console.log(inputValue);
    console.log(form[inputName]);
  }

  //Function to handle file adding:
  //(NOTE: This goes with the Dropzone code and note at the bottom of the file input component)
  // function handleFile(acceptedFiles) {
  //   setForm({
  //     treePic: acceptedFiles
  //   });
  // }

  //Function to handle form submission:
  function handleSubmit(event) {
    event.preventDefault();
    console.log(`You've pressed submit!`);
    /*TODO: DRAFT OF FETCH TO IMPLEMENT ONCE DATABASE IS READY:
    fetch('linktoserver', {
        method: 'post',
        body: {
            'fName': `${form.fName}`,
            'lName': `${form.lName}`,
            'org': `${form.org}`,
            'email': `${form.email}`,
            'phone': `${form.phone}`,
            'species': `${form.species}`,
            'datePlanted': `${form.datePlanted}`,
            'comment': `${form.comment}`
        }
    }).then(res => res.json()).then(data=>console.log(data)).catch((error) => {console.error('Error: Failed to fetch.')});
    */
    setShowSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fName">First name:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'fName'}
        value={form.fName}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="lName">Last Name:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'lName'}
        value={form.lName}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="org">Organisation:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'org'}
        value={form.org}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <TextInputField
        name={'email'}
        value={form.email}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="phone">Telephone number:</label>
      <TextInputField
        name={'phone'}
        value={form.phone}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="species">Tree species:</label>
      <DropdownInputField
        name={'species'}
        value={form.species}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="datePlanted">Date planted:</label>
      <DatePickerInput
        name={'datePlanted'}
        value={form.datePlanted}
        handleChange={handleChange}
      />
      <br />
      <label htmlFor="treePic">Upload a photo:</label>
      <FileUploader name={'treePic'} handleChange={handleChange} />
      <br />
      <label htmlFor="comment">Details:</label>
      <TextAreaInput
        placeholder={'More details about your tree request'}
        name={'comment'}
        value={form.comment}
        handleChange={handleChange}
      />
      <br />
      <SuccessMessage showSuccess={showSuccess} />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
