import React, { useState } from 'react';
import TextInputField from '../TextInputField/index';
import DropdownInputField from '../DropdownInputField/index';
import DatePicker from '../DatePicker/index';
import TextAreaInput from '../TextAreaInput/index';
import FileUploader from '../FileUploader/index';

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

//TODO: Need conditional rendering - if person selects planter, only display planter fields, and for requesters, only display requester fields

//TODO: Need a place for the user to upload a photo!

//TODO: Correctly label in line with accessibility guidelines for screen readers ✅

//TODO: Need states to manage each field ✅

//TODO: Need handleChange function that changes state for each field based on onChange event

//TODO: Need handleSubmit function to do the post request when submit is pressed (onSubmit event), taking in the values from the input fields' states

//--------------CODE------------------------------

function Form() {
  //   const [fName, setFName] = useState('');
  //   const [lName, setLName] = useState('');
  //   const [org, setOrg] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [phone, setPhone] = useState('');
  //   const [species, setSpecies] = useState('');
  //   const [datePlanted, setDatePlanted] = useState('');
  //   const [comment, setComment] = useState('');
  //   const [treePic, setTreePic] = useState('');

  const [form, setForm] = useState({
    fName: '',
    lName: '',
    org: '',
    email: '',
    phone: '',
    species: '',
    datePlanted: null,
    comment: ''
    // treePic: './sampletree.jpg'
  });

  function handleChange(event) {
    const inputValue = event.target.value;
    const name = event.target.name;
    setForm({ [name]: inputValue });
    console.log(form[name]);
  }

  return (
    <form>
      <label for="fName">First name:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'fName'}
        value={form.fName}
        handleChange={handleChange}
      />

      <label for="lName">Last Name:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'lName'}
        value={form.lName}
        handleChange={handleChange}
      />

      <label for="org">Organisation:</label>
      <TextInputField
        placeholder={'Optional'}
        name={'org'}
        value={form.org}
        handleChange={handleChange}
      />

      <label for="email">Email:</label>
      <TextInputField
        name={'email'}
        value={form.email}
        handleChange={handleChange}
      />

      <label for="phone">Telephone number:</label>
      <TextInputField
        name={'phone'}
        value={form.phone}
        handleChange={handleChange}
      />

      <label for="species">Tree species:</label>
      <DropdownInputField
        name={'species'}
        value={form.species}
        handleChange={handleChange}
      />

      <label for="datePlanted">Date planted:</label>
      <DatePicker
        name={'datePlanted'}
        value={form.datePlanted}
        handleChange={handleChange}
      />

      <label for="comment">Details:</label>
      <TextAreaInput
        placeholder={'More details about your tree request'}
        name={'comment'}
        value={form.comment}
        handleChange={handleChange}
      />

      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;

/*
FOR FILE UPLOAD: 
      <label for="treePic">Upload photo:</label>
      <FileUploader
        name={'treePic'}
        value={form.treePic}
        handleChange={handleChange}
      />
*/
