import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
export default App;

function App() {

  const inputFields = ["text", "name", "text", "susrname"];
  const [isInputDisable, setIsInputDisable] = useState(true);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');


  // const inputFieldsGenerator = () => {
  //   return inputFields.map((e) => (
  //     <input name={e} />
  //   ))

  //   // return (<input type={inputFields[0]} name={inputFields[1]} />)
  // }
  // const myInputs = (inputType, inputName, inputOnChange, inputClassName) => {
  //   return <input type={inputType} name={inputName} onChange={inputOnChange} className={inputClassName} />
  // }

  const validateName = (e) => {

    if (e.length >= 5) {
      setIsInputDisable(false);
    }
    setName(e)
  }

  const handleSubmit = () => {
    if (name.length >= 5) {
      console.log(name, surname)
    } else {
      console.log("warrning")
    };
  };




  // const [email, setEmail] = useState('');
  // const [gender, setGender] = useState('');
  // const [sure, setSure] = useState('');


  // Button tests
  // const handleButtonClick = (e) => {

  // }

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // }

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // }

  // const handleGenderChange = (e) => {
  //   setGender(e.target.value);
  // }
  // const handleSureChange = (e) => {
  //   setSure(e.target.value);
  // }

  // // const radioValues = [
  // //   { value: male, checked: false},
  // //   { value: female, checked: false},
  // //   { value: other, checked: false}
  // //   ]

  // const handleButtonClick = (e) => {
  //   // e.preventDefault();
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Gender:', gender);
  //   console.log('Sure', sure);
  // }
  //   function getDate() {
  //     const today = new Date();
  //     const month = today.getMonth() + 1;
  //     const year = today.getFullYear();
  //     const date = today.getDate();
  //     return `${month}/${date}/${year}`;
  //   } 
  //        const [currentDate, setCurrentDate] = useState(getDate());



  return (
    <React.Fragment>


      {/* <form className="form">
        <label className="question"><b>
          Are you ready for the dream work?</b>
        </label>
        <input type="checkbox" name="sure" checked={sure === 'yes'} value="yes" onChange={handleSureChange} />Yes <br></br>
        <input type="checkbox" name="sure" checked={sure === 'no'} value="no" onChange={handleSureChange} />No <br></br>
        <input type="text" name="name" placeholder='Your name' value={name} onChange={handleNameChange} />
        <br />
        <input type="email" name="email" placeholder="Your email" value={email} onChange={handleEmailChange} />
        <br />
        <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />Male
        <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />Female
        <br />
        <button type="button" onClick={handleButtonClick}>LETS DO IT</button>
        {/* <button type="submit">Submit</button> */}
      {/* </form>  */}
      {/* second form where i used disabled */}


      <div>
        <input
          type="text"
          onChange={(e) => validateName(e.target.value)} />
        <br />
        <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} required={true} disabled={isInputDisable} />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        {/* {myInputs("text", "number", handleSubmit, "inputClassName")}
        {inputFieldsGenerator()} */}
      </div>












      <div className="App">
        <div className="test">
          <p></p>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
};