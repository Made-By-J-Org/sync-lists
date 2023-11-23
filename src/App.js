import './App.css';
import React, { useState } from 'react';
export default App;

function App() {
  const emailRegex = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const personalInfoRegex = new RegExp(
    '^[a-zA-Z]'
  );


  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agrement, setAgrement] = useState('');
  const [isNameOk, setIsNameOk] = useState(false);
  const [isSurnameOk, setIsSurnameOk] = useState(false);
  // const validateEmail = (e) => {
  //   const valueForEmail = (e.target.value);
  //   setEmail(valueForEmail)
  //   console.log("1", emailRegex.test(valueForEmail))

  //   if (emailRegex.test(valueForEmail)) {
  //     console.log("2", email, valueForEmail,)
  //   } else {
  //     console.log("change an email")
  //   }

  // }
  function validatePersonalInfo(personalInfo, wichOne) {
    if (personalInfoRegex.test(personalInfo)) {
      if (wichOne === "name") {
        setIsNameOk(true)
      } else {
        setIsSurnameOk(true)
      }
    } else {
      console.log("wrong ", wichOne)
    }

  }


  const handleSubmit = () => {

    if (name != "") {
      validatePersonalInfo(name, "name")
    } else {
      console.log("warrning, name is empty")
    };
    if (surname != "") {
      validatePersonalInfo(surname, "surname")
    } else {
      console.log("warrning, Surname is empty")
    };
    if (gender != "") {
      console.log(name, surname, gender, email, message, agrement)
    } else {
      console.log("warrning, gender is empty")
    };
    if (message != "") {
      console.log(name, surname, gender, email, message, agrement)
    } else {
      console.log("warrning, Message is empty")
    };
    if (agrement != "") {
      console.log(name, surname, gender, email, message, agrement)
    } else {
      console.log("warrning, agrement is empty")
    };
    if (email != "") {
      console.log(name, surname, gender, email, message, agrement)
    } else {
      console.log("warrning, Email is empty")
    };
  }


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
         <br></br> <span>{!isSurnameOk && "It's wrong"}</span><br></br>
        </label> <br></br>
        <lable>Your email<br></br>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required={true}></input>
        </lable><br></br>
        <label> Your Message </label><br></br>
        <textarea rows="4" cols="18" name="message" placeholder="Enter your message here" onChange={(e) => setMessage(e.target.value)}></textarea><br></br>
        <label>Are you agree to send this form</label><br></br>
        <input type='checkbox' name="agrement" value="yes" onChange={(e) => setAgrement(e.target.value)} required={true}></input> i said yes <br></br>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

      </div>

      <footer>
        Created by G.
      </footer>


    </React.Fragment>
  );
};