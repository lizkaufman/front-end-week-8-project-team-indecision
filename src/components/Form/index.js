import React, { useState } from 'react';
import TextInputField from '../TextInputField/index';
import DropdownInputField from '../DropdownInputField/index';
import DatePicker from '../DatePicker/index';
import TextAreaInput from '../TextAreaInput/index';

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

//TODO: Need states to manage each field

//--------------CODE------------------------------

function Form() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [species, setSpecies] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [comment, setComment] = useState('');
  const [treePic, setTreePic] = useState('');

  return (
    <form>
      <label for="fName">First name:</label>
      <TextInputField placeholder={'Optional'} name={'fName'} value={} />

      <label for="lName">Last Name:</label>
      <TextInputField placeholder={'Optional'} name={'lName'} value={} />

      <label for="org">Organisation:</label>
      <TextInputField placeholder={'Optional'} name={'org'} value={} />

      <label for="email">Email:</label>
      <TextInputField placeholder={} name={'email'} value={} />

      <label for="phone">Telephone number:</label>
      <TextInputField placeholder={} name={'phone'} value={} />

      <label for="species">Tree species:</label>
      <DropdownInputField name={'species'} value={} />

      <label for="datePlanted">Date planted:</label>
      <DatePicker name={'datePlanted'} value={} />

      <label for="comment">Details:</label>
      <TextAreaInput
        placeholder={'More details about your tree request'}
        name={'comment'}
        value={}
      />

      <label for="treePic">Upload photo:</label>
      <TextInputField
        placeholder={
          'This will be replaced by snazzy image uploader React component!'
        }
        name={'treePic'}
        value={}
      />

      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
