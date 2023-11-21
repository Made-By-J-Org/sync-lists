import './App.css';
import React, { useState } from 'react';
import parsePhoneNumber, { PhoneNumberMatcher } from 'libphonenumber-js';
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength
} from 'libphonenumber-js';
export default App;

function App() {
  const emailRegex = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');


  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');


  const validateEmail = (e) => {
    const valueForEmail = (e.target.value);
    setEmail(valueForEmail)
    console.log("1", emailRegex.test(valueForEmail))
    if (emailRegex.test(valueForEmail)) {
      console.log("2", email, valueForEmail,)
    } else {
      console.log("change an email")
    }

  }

  const handleSubmit = () => {
    if (name.length >= 5) {
      console.log(gender, name, surname, email)
    } else {
      console.log("warrning one or more fields needs interaction")
    };
  };

  // const phoneNumber = parsePhoneNumber(' 8 (800) 555-35-35 ', 'RU')
  // // if (phoneNumber) {
  // //   phoneNumber.country === 'RU'
  // //   phoneNumber.number === '+78005553535'
  // //   phoneNumber.isPossible() === true
  // //   phoneNumber.isValid() === true
  // //   // Note: `.getType()` requires `/max` metadata: see below for an explanation.
  // //   phoneNumber.getType() === 'TOLL_FREE'
  // }
  // isPossiblePhoneNumber('8 (800) 555-35-35', 'RU') === true
  // isValidPhoneNumber('8 (800) 555-35-35', 'RU') === true

  // validatePhoneNumberLength('8 (800) 555', 'RU') === 'TOO_SHORT'
  // validatePhoneNumberLength('8 (800) 555-35-35', 'RU') === undefined // Length is valid.

  return (
    <React.Fragment>

      <div className='form'>
        <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} required={true} />Mr
        <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} required={true} />Mrs
        <br></br>
        <label>
          First Name
          <br></br>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className='preview'>Surname<br></br>
          <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} required={true} />

        </label> <br></br>
        <lable>Your email<br></br>
          <input type="email" name="email" onChange={(e) => validateEmail(e)} required={true}></input>
        </lable><br></br>
        {/* <lable>Phone number<br></br>
          <input type="number" name="phone" onClick={parsePhoneNumber} ></input></lable><br></br> */}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

      </div>





    </React.Fragment>
  );
};