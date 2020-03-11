import React, { useState } from 'react';
import TextInputField from '../TextInputField/index';
import DropdownInputField from '../DropdownInputField/index';
import DatePickerInput from '../DatePickerInput/index';
import TextAreaInput from '../TextAreaInput/index';
import FileUploader from '../FileUploader/index';
import SuccessMessage from '../SuccessMessage/index';
import Button from '../Button';
import FormPrivacyOptions from '../FormPrivacyOptions/index';

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
//--Make buttons to toggle ✅
//--Attach function to buttons ✅
//--Have key within form state to flag which form and connect to buttons ✅
//--Set input components to conditionally render where necessary ✅
//FIXME: Error related to controlled components being uncontrolled; for regular inputs, this is fine because you set the value to the state, but for the button, you can't set a value (unless you change it to <input> with a type='button', but then this makes the value what the text in the button shows - so it would just show true and false).

//TODO: Need a place for the user to upload a photo! Use <input type='file' /> in the FileUploader component. ✅

//TODO: Correctly label in line with accessibility guidelines for screen readers ✅

//TODO: Need states to manage each field ✅

//TODO: Need handleChange function that changes state for each field based on onChange event ✅

//TODO: Need handleSubmit function to do the post request when submit is pressed (onSubmit event), taking in the values from the input fields' states ✅

//TODO: Connect the handleSubmit's fetch to the database using the URL

//TODO: Show a success message once the form is submitted ✅

//TODO: Privacy options to let the user control how much detail they want to show on their tree pins (more detailed plan in component FormPrivacyOptions) - conditionally rendered for planters
//TODO: Add comment area for planter to write dedication/message/etc. ✅

//--------------CODE------------------------------

function Form() {
  //State to manage uploaded image file:
  const [file, setFile] = useState(null);

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
    treePic: `${file}`,
    requester: false
  });

  //State that manages whether the form renders the questions specific to planters or requesters:
  const [requester, setRequester] = useState(false);

  //State to show success message after form submits:
  const [showSuccess, setShowSuccess] = useState(false);

  //Functions to handle switching between requester and planter (default is planter):
  function toggleFormTypeRequester() {
    setRequester(true);
    setForm({ requester: true });
    console.log('requester state: ', requester);
    console.log(form.requester);
  }
  function toggleFormTypePlanter() {
    setRequester(false);
    setForm({ requester: false });
    console.log('requester state: ', requester);
    console.log(form.requester);
  }
  //The console logs will be wrong the first time you press. Press it again and they'll be right. It's because the console.log is always one step behind the actual state change.

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
      treePic: inputName === 'treePic' ? inputValue : form.treePic,
      requester: inputName === 'requester' ? inputValue : form.requester
    });
    console.log(inputName);
    console.log(inputValue);
    console.log(form[inputName]);
  }

  function handleFile(event) {
    //event.target.files -> array of stored files
    //target.files[0] -> actual file and details
    //setFile -> sets file state
    const imgFile = event.target.files[0];
    setFile(imgFile);
    console.log(imgFile);
    console.log('file state: ', file);
  }

  //Function to handle file adding:
  //(NOTE: This goes with the Dropzone code and note at the bottom of the file input component)
  // function handleFile(acceptedFiles) {
  //   setForm({
  //     treePic: acceptedFiles
  //   });
  // }

  //Function to handle form submission:
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(`You've pressed submit!`);

    // const usersBody = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     firstname: `${form.fName}`,
    //     lastname: `${form.lName}`,
    //     organisation: `${form.org}`,
    //     email: `${form.email}`,
    //     phonenumber: `${form.phone}`
    //   })
    // };
    // fetch('192.168.0.71:5000/users', usersBody)
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    fetch('http://192.168.0.71:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: `${form.fName}`,
        lastname: `${form.lName}`,
        organisation: `${form.org}`,
        email: `${form.email}`,
        phonenumber: `${form.phone}`
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error: Failed to fetch.');
      });

    fetch('http://192.168.0.71:5000/trees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        species: `${form.species}`,
        dateplanted: `${form.datePlanted}`,
        comment: `${form.comment}`,
        status: `${form.requester}`,
        image: `${form.treePic}`
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error: Failed to fetch.');
      });

    setShowSuccess(true);
  }

  return (
    <>
      <Button
        name="requester"
        buttonText="Click here if you would like to request tree(s) in an area"
        handleClick={toggleFormTypeRequester}
      />
      <Button
        name="requester"
        buttonText="Click here if you would like to register tree(s) you've planted"
        handleClick={toggleFormTypePlanter}
      />
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
        {!requester ? <label htmlFor="species">Tree species:</label> : null}
        {!requester ? (
          <DropdownInputField
            name={'species'}
            value={form.species}
            handleChange={handleChange}
          />
        ) : null}
        <br />
        {!requester ? <label htmlFor="datePlanted">Date planted:</label> : null}
        {!requester ? (
          <DatePickerInput
            name={'datePlanted'}
            value={form.datePlanted}
            handleChange={handleChange}
          />
        ) : null}
        <br />
        <label htmlFor="treePic">Upload a photo:</label>
        <FileUploader name={'treePic'} handleFile={handleFile} />
        <br />
        {requester ? (
          <label htmlFor="comment">Details of request:</label>
        ) : null}
        {requester ? (
          <TextAreaInput
            placeholder={'More details about your tree request'}
            name={'comment'}
            value={form.comment}
            handleChange={handleChange}
          />
        ) : null}
        {!requester ? (
          <label htmlFor="comment">Details about your tree:</label>
        ) : null}
        {!requester ? (
          <TextAreaInput
            placeholder={
              'This can include a message or dedication to a loved one that you would like displayed with your tree on the map'
            }
            name={'comment'}
            value={form.comment}
            handleChange={handleChange}
          />
        ) : null}
        <br />
        {!requester ? <FormPrivacyOptions /> : null}
        <SuccessMessage showSuccess={showSuccess} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Form;
