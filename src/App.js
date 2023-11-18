import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
export default App;

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [sure, setSure] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }
  const handleSureChange = (e) => {
    setSure(e.target.value);
  }

  // const radioValues = [
  //   { value: male, checked: false},
  //   { value: female, checked: false},
  //   { value: other, checked: false}
  //   ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Sure', sure);
  }




  return (
    <React.Fragment>

      <form onSubmit={handleSubmit}>
        <input type="checkbox" name="sure" checked={sure === 'yes'} value="yes" onChange={handleSureChange} />Yes <br></br>
        <input type="checkbox" name="sure" checked={sure === 'no'} value="no" onChange={handleSureChange} />No <br></br>
        <input type="text" name="name" placeholder='Your name' value={name} onChange={handleNameChange} />
        <br />
        <input type="email" name="email" placeholder="Your email" value={email} onChange={handleEmailChange} />
        <br />
        <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />Male
        <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />Female
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="App">
        <div class="testp">
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